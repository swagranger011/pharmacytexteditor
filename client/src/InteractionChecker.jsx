import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mode from "./Mode";
import "./Mode.css";

const InteractionChecker = () => {
  const [drugs, setDrugs] = useState(["", ""]);
  const [interactions, setInteractions] = useState([]);
  const [error, setError] = useState(null);

  const handleDrugChange = (index, value) => {
    const newDrugs = [...drugs];
    newDrugs[index] = value;
    setDrugs(newDrugs);
  };

  const addDrugInput = () => {
    setDrugs([...drugs, ""]);
  };

  const checkInteractions = async () => {
    setError(null);
    setInteractions([]);
    try {
      const response = await fetch(
        "http://localhost:8081/api/check-interactions",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ drugs: drugs.filter((d) => d.trim()) }),
        }
      );
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setInteractions(data.interactions);
    } catch (err) {
      setError(err.message);
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
            <Link to="/contacts">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <main className="dashboard-main">
        <h2>Interaction Checker</h2>
        <p>Enter the names of the drugs you want to check for interactions:</p>
        {drugs.map((drug, idx) => (
          <input
            key={idx}
            style={{ display: "block", marginBottom: "8px", width: "75%" }}
            value={drug}
            onChange={(e) => handleDrugChange(idx, e.target.value)}
            placeholder="Type drug name here!"
          />
        ))}
        <button type="button" onClick={addDrugInput}>
          Add Drug
        </button>
        <button
          id="check-button"
          style={{ marginLeft: "10px" }}
          type="button"
          onClick={checkInteractions}
        >
          Check Interactions
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
      </main>
      <Link to="/login" className="dashboard-login-link">
        <button className="login-button">
          <span className="btn-txt">Login</span>
        </button>
      </Link>
      <footer className="dashboard-footer">
        <p>&copy; 2023 WebRX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InteractionChecker;
