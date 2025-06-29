import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mode.css";
import Mode from "./Mode";

const PharmacyTextEditor = () => {
  const [inputText, setInputText] = useState("");
  const [translation, setTranslation] = useState([]); // Change to array
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!inputText.trim()) {
        throw new Error("Please enter a SIG code");
      }

      const response = await fetch("http://localhost:8081/Codes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: inputText.trim() }),
      });

      const data = await response.json();

      if (data.error) throw new Error(data.error);
      if (!data.translations || !Array.isArray(data.translations)) {
        throw new Error("Translation format error");
      }

      setTranslation(data.translations);
      setError(null);
    } catch (error) {
      setError(
        error.message.includes("fetch")
          ? "Connection to server failed"
          : error.message
      );
      setTranslation([]);
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
        <h2>Sig Code Translator</h2>
        <p>
          Hello there! Have a SIG code and don't know what it means. No worries!
          Just enter your SIG code here and it will translate it into proper
          instructions.
        </p>
        <form onSubmit={fetchData}>
          <textarea
            className="input-textarea"
            rows={3}
            style={{ width: "100%" }}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter Sig code here!"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Translating..." : "Translate"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {translation.length > 0 && (
          <div className="result">
            <h3>Translation:</h3>
            <ul>
              {translation.map((item, index) => (
                <li key={index}>
                  <strong>{item.code}:</strong>{" "}
                  {item.translation || "Not found"}
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
        <p>&copy; 2025 WebRX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PharmacyTextEditor;
