import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mode from './Mode';
import './Mode.css';

const InteractionChecker = () => {
  const [drugs, setDrugs] = useState(['', '']); // Start with two inputs

  const handleDrugChange = (index, value) => {
    const newDrugs = [...drugs];
    newDrugs[index] = value;
    setDrugs(newDrugs);
  };

  const addDrugInput = () => {
    setDrugs([...drugs, '']);
  };

  return (
    <div>
      <header className="dashboard-header">
        <h1>WebRX</h1>
        <Mode />
      </header>
      <nav className="dashboard-nav">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/pharmacy-text-editor">Sig Code Translator</Link></li>
          <li><Link to="/interaction-checker">Interaction Checker</Link></li>
          <li><Link to="/drug-information">Drug Information</Link></li>
          <li><Link to="/scheduler">Scheduler</Link></li>
        </ul>
      </nav>
      <main className="dashboard-main">
        <h2>Interaction Checker</h2>
        <p>Enter the names of the drugs you want to check for interactions:</p>
        {drugs.map((drug, idx) => (
          <input
            key={idx}
            style={{ display: 'block', marginBottom: '8px', width: '75%' }}
            value={drug}
            onChange={e => handleDrugChange(idx, e.target.value)}
            placeholder="Type drug name here!"
          />
        ))}
        <button type="button" onClick={addDrugInput}>Add Drug</button>
        <button
          id="check-button"
          style={{ marginLeft: '10px' }}
          onClick={() => alert('Check interactions functionality not implemented yet.')}
        >
          Check Interactions
        </button>
      </main>
    </div>
  );
};

export default InteractionChecker;
// This component is a placeholder for the interaction checker functionality.