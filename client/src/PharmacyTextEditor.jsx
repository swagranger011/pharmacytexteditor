import React from "react";
import { Link } from "react-router-dom";
import './Mode.css';
import Mode from './Mode';

const PharmacyTextEditor = () => {
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
        <main className = "dashboard-main">
            <p>Hello there! Have a SIG code and don't know what it means. No worries! Just enter your
                SIG code here and it will translate it into proper instructions.
            </p>
            <p>Enter SIG Here:</p>
            <textarea rows="10" cols="75" id="textfield" placeholder="Type SIG Here!"></textarea>
            <button id="textbutton" onclick="translate()">Submit</button>
            <p>SIG Code:</p>
            <p id="sig"></p>
            <button id = "clear" onclick="clear()">Clear</button>
        </main>
    </div>
  );
};
export default PharmacyTextEditor;