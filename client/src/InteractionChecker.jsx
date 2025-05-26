import React from 'react';
import { Link } from 'react-router-dom';
import Mode from './Mode';
import './Mode.css';

const InteractionChecker = () => {
    return (
        <div>
        <header className="dashboard-header">
            <h1>WebRX</h1>
            <Mode />
        </header>
        <nav className="dashboard-nav">
            <ul>
            <li><Link to="/pharmacy-text-editor">Sig Code Translator</Link></li>
            <li><Link to="/interaction-checker">Interaction Checker</Link></li>
            <li><Link to="/drug-information">Drug Information</Link></li>
            <li><Link to="/scheduler">Scheduler</Link></li>
            </ul>
        </nav>
        <main className="dashboard-main">
            <h2>Interaction Checker</h2>
            <p>Enter the names of the drugs you want to check for interactions:</p>
            <textarea rows="10" cols="75" id="drug-input" placeholder="Type drug names here!"></textarea>
            <button id="check-button" onClick={() => alert('Check interactions functionality not implemented yet.')}>Check Interactions</button>
        </main>
        </div>
    );
    }
export default InteractionChecker;
// This component is a placeholder for the interaction checker functionality.