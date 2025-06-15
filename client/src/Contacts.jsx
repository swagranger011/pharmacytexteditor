import React from 'react';
import { Link } from 'react-router-dom';
import Mode from './Mode';
import './Mode.css';

const Contacts = () => {
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
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please reach out to us by filling out the form:</p>
      </main>
      <Link to="/login" className="dashboard-login-link">
        <button className="login-button">
          <span className='btn-txt'>Login</span>
        </button>
      </Link>
      <footer className="dashboard-footer">
        <p>&copy; 2023 WebRX. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default Contacts;