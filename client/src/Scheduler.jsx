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
            <li><Link to="/">Dashboard</Link></li>                
            <li><Link to="/pharmacy-text-editor">Sig Code Translator</Link></li>
            <li><Link to="/interaction-checker">Interaction Checker</Link></li>
            <li><Link to="/drug-information">Drug Information</Link></li>
            <li><Link to="/scheduler">Scheduler</Link></li>
            </ul>
        </nav>
        <main className="dashboard-main">
            <h2>Scheduler</h2>
        </main>
        </div>
    );
    }
export default InteractionChecker;
// This component is a placeholder for the interaction checker functionality.