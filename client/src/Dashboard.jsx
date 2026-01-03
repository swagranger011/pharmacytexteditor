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
            <h1 className='Title'>WebRX</h1>
            <Mode />
        </header>

        <nav className="dashboard-nav" aria-label="Main navigation">
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/pharmacy-text-editor">Sig Code Translator</Link></li>
              <li><Link to="/interaction-checker">Interaction Checker</Link></li>
              <li><Link to="/drug-information">Drug Information</Link></li>
              <li><Link to="/Scheduler">Scheduler</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/contacts">Contact Us</Link></li>
            </ul>
        </nav>

        <main className="dashboard-main">
            <section className="hero" aria-label="Welcome">
                <div className="hero-left">
                    <h2>Welcome to WebRX</h2>
                    <p className="hero-sub">Welcome to WebRX! A pharmacy website filled with helpful tools!</p>

                </div>
                <div className="hero-image">
                    <img src={drugs} alt="Pharmacy tools" loading="lazy" style={{maxWidth:'100%',height:'auto',borderRadius:8}} />
                </div>
            </section>

            <section className="tool-grid" aria-label="Tools">
                <Link to="/pharmacy-text-editor" className="tool-card" aria-label="Sig Code Translator">
                  <h3>Sig Code Translator</h3>
                  <p>Translate prescription sig codes instantly.</p>
                </Link>

                <Link to="/interaction-checker" className="tool-card" aria-label="Interaction Checker">
                  <h3>Interaction Checker</h3>
                  <p>Check drug-drug interactions quickly.</p>
                </Link>

                <Link to="/drug-information" className="tool-card" aria-label="Drug Information">
                  <h3>Drug Information</h3>
                  <p>Search dosing, indications and safety data.</p>
                </Link>

                <Link to="/Scheduler" className="tool-card" aria-label="Scheduler">
                  <h3>Scheduler</h3>
                  <p>Set reminders & manage patient schedules.</p>
                </Link>
            </section>
        </main>

        <Link to="/login" className="dashboard-login-link" aria-hidden={false}>
            <button className="login-button" aria-label="Login">
              <span className='btn-txt'>Login</span>
            </button>
        </Link>

        <footer className="dashboard-footer" role="contentinfo">
            <p>&copy; 2025 WebRX. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default Dashboard;