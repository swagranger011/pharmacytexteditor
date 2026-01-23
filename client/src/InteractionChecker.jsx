import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Mode from "./Mode";
import "./Mode.css";

const API_BASE_URL = "http://localhost:8081/api";

const InteractionChecker = () => {
  const [drugs, setDrugs] = useState(["", ""]);
  const [interactions, setInteractions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDrugChange = useCallback(
    (index, value) => {
      const newDrugs = [...drugs];
      newDrugs[index] = value;
      setDrugs(newDrugs);
    },
    [drugs]
  );

  const addDrugInput = () => {
    setDrugs([...drugs, ""]);
  };

  const removeDrug = useCallback(
    (index) => {
      setDrugs(drugs.filter((_, i) => i !== index));
    },
    [drugs]
  );

  const checkInteractions = async () => {
    setError(null);
    setInteractions([]);
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/check-interactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ drugs: drugs.filter((d) => d.trim()) }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || "Failed to check interactions");
      setInteractions(data.interactions);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="dashboard-header">
        <h1>WebRX</h1>
        <Mode />
      </header>
      <nav className="dashboard-nav">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/pharmacy-text-editor">Sig Code Translator</Link>
          </li>
          <li>
            <Link to="/interaction-checker">Interaction Checker</Link>
          </li>
          <li>
            <Link to="/drug-information">Drug Information</Link>
          </li>
          <li>
            <Link to="/scheduler">Scheduler</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <main className="dashboard-main">
        <h2>Interaction Checker</h2>
        <p>Enter the names of the drugs you want to check for interactions:</p>
        {drugs.map((drug, idx) => (
          <div key={idx}>
            <label htmlFor={`drug-${idx}`}>Drug {idx + 1}:</label>
            <input
              id={`drug-${idx}`}
              className="drug-input"
              value={drug}
              onChange={(e) => handleDrugChange(idx, e.target.value)}
              placeholder="Type drug name here!"
              aria-describedby={error ? "error-message" : undefined}
            />
            {drugs.length > 1 && (
              <button type="button" onClick={() => removeDrug(idx)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addDrugInput}>
          Add Drug
        </button>
        <button
          id="check-button"
          type="button"
          onClick={checkInteractions}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Interactions"}
        </button>
        {error && <p className="error">{error}</p>}
        {interactions.length > 0 && (
          <div>
            <h3>Interactions:</h3>
            <ul>
              {interactions.map((item, idx) => (
                <li key={idx}>
                  <strong>
                    {item.DrugA} + {item.DrugB}
                  </strong>
                  : {item.Severity} - {item.Description}
                  {item.Management && (
                    <div>
                      <em>Management:</em> {item.Management}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        {interactions.length === 0 && !loading && !error && (
          <p>No interactions found. Try adding more drugs.</p>
        )}
      </main>
      <Link to="/login" className="dashboard-login-link">
        <button className="login-button">
          <span className="btn-txt">Login</span>
        </button>
      </Link>
      <footer className="dashboard-footer">
        <p>&copy; 2025 WebRX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InteractionChecker;
