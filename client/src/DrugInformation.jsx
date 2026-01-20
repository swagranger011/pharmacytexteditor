import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Mode from "./Mode";
import "./Mode.css";

const DrugInformation = () => {
  const [input, setInput] = useState("");
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Debounce input for API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim()) {
        getDrugInfo();
      }
    }, 500); // 500ms delay
    return () => clearTimeout(timer);
  }, [input]);

  const getDrugInfo = async () => {
    setError(null);
    setInfo(null);
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8081/api/drug-info?name=${encodeURIComponent(input.trim())}`
      );
      if (!response.ok) throw new Error("Network error. Please try again.");
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setInfo(data);
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
        <h2>Drug Information</h2>
        <p>Enter the name of the drug you want information about:</p>
        <input
          id="drug-input"
          placeholder="Type drug name here!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Drug name input"
        />
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {info && (
          <div className="result">
            <h3>{info.Name}</h3>
            <p>
              <strong>Generic Name:</strong> {info.GenericName}
            </p>
            <p>
              <strong>Description:</strong> {info.DrugDescription}
            </p>
          </div>
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

export default DrugInformation;
