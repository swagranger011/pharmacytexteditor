import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mode.css";
import Mode from "./Mode";

const PharmacyTextEditor = () => {
  const [inputText, setInputText] = useState("");
  const [translation, setTranslation] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8081/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: inputText }),
      });
      
      if (!response.ok) throw new Error("Translation not found");
      const result = await response.json();
      setTranslation(result.translation);
      setError(null);
    } catch (error) {
      setError(error.message);
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
            <Link to="/dashboard">Dashboard</Link>
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
        </ul>
      </nav>
      <main className="dashboard-main">
        <p>
          Hello there! Have a SIG code and don't know what it means. No worries!
          Just enter your SIG code here and it will translate it into proper
          instructions.
        </p>
        <form onSubmit={fetchData}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter Sig code here!"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Translating..." : "Translate"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {translation && (
          <div className="result">
            <h3>Translation:</h3>
            <p>{translation}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PharmacyTextEditor;