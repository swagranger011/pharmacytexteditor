import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mode from "./Mode";
import "./Mode.css";

const timeOptions = [
  { label: "Morning", value: "morning" },
  { label: "Afternoon", value: "afternoon" },
  { label: "Evening", value: "evening" },
  { label: "Nighttime", value: "nighttime" },
];

const Scheduler = () => {
  const [input, setInput] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleTimeChange = (time) => {
    setSelectedTimes((prev) =>
      prev.includes(time)
        ? prev.filter((t) => t !== time)
        : [...prev, time]
    );
  };

  const addDrug = () => {
    setError(null);
    if (!input.trim()) {
      setError("Please enter a drug name.");
      return;
    }
    if (selectedTimes.length === 0) {
      setError("Please select at least one time.");
      return;
    }
    setSchedule([
      ...schedule,
      { name: input.trim(), times: [...selectedTimes] },
    ]);
    setInput("");
    setSelectedTimes([]);
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
        <h2>Scheduler</h2>
        <p>
          Don't know when to take your medications? No problem! This scheduler
          will help you take your meds at the right times.
        </p>
        <p>Enter the name of the drug you want to add to your schedule</p>
        <input
          id="drug-input"
          placeholder="Type drug name here!"
          value={input}
          style={{ width: "100%", textAlign: "center" }}
          onChange={(e) => setInput(e.target.value)}
        />
        <div style={{ margin: "10px 0" }}>
          {timeOptions.map((option) => (
            <label key={option.value} style={{ marginRight: "15px" }}>
              <input
                type="checkbox"
                checked={selectedTimes.includes(option.value)}
                onChange={() => handleTimeChange(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
        <button id="add-button" type="button" onClick={addDrug}>
          Add Drug  
        </button>
        {error && <p className="error">{error}</p>}
        {schedule.length > 0 && (
          <div className="result">
            <h3>Your Medication Schedule:</h3>
            <ul>
              {schedule.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.name}</strong> -{" "}
                  {item.times.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ")}
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

export default Scheduler;
