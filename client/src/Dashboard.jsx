import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import './Mode.css';
import drugs from "./photos/drugs.jpg";
import Mode from './Mode';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
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
            <li><Link to="/Scheduler">Scheduler</Link></li>
            </ul>
        </nav>
        <main className="dashboard-main">
            <img src={drugs} alt="Pharmacy" className="dashboard-image" style={{width: "1200px", height: "auto"}} />
            <h2>Welcome to WebRX! A pharmacy website filled with helpful tools!</h2>
        </main>
    </div>
  );
};

export default Dashboard;