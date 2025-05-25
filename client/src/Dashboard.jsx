import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import './Mode.css';
import Mode from './Mode';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <header className="dashboard-header">
            <h1>Dashboard</h1>
            <Mode />
        </header>
        <nav className="dashboard-nav">
            <ul>
            <li><Link to="/pharmacy-text-editor">Pharmacy Text Editor</Link></li>
            <li><Link to="/codes">Codes</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
        <main className="dashboard-main">
            <p>Welcome to the Dashboard! Use the links above to navigate.</p>
        </main>
    </div>
  );
};

export default Dashboard;