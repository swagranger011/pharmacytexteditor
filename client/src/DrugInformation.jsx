import React from 'react';
import { Link } from 'react-router-dom';
import Mode from './Mode';
import './Mode.css';

const DrugInformation = () => {
    return (
        <div>
            <header className="dashboard-header">
                <h1>WebRX</h1>
                <Mode />
            </header>
            <nav className="dashboard-nav">
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/pharmacy-text-editor">Sig Code Translator</Link></li>
                    <li><Link to="/interaction-checker">Interaction Checker</Link></li>
                    <li><Link to="/drug-information">Drug Information</Link></li>
                    <li><Link to="/scheduler">Scheduler</Link></li>
                </ul>
            </nav>
            <main className="dashboard-main">
                <h2>Drug Information</h2>
                <p>Enter the name of the drug you want information about:</p>
                <textarea rows="10" cols="75" id="drug-input" placeholder="Type drug name here!"></textarea>
                <button id="info-button" onClick={() => alert('Drug information functionality not implemented yet.')}>Get Drug Information</button>
            </main>
        </div>
    );
}
export default DrugInformation;
// This component is a placeholder for the drug information functionality.