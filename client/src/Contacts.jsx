import React from "react";
import { Link } from "react-router-dom";
import Mode from "./Mode";
import "./Mode.css";
import "./Contacts.css";

const Contacts = () => {
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
            <Link to="/contacts">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <main className="dashboard-main">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, please reach out to us
          by filling out the form:
        </p>
        <form className="contact-form">
          <fieldset>
            <label htmlFor="firstname">*First Name:</label>
            <input type="text" id="firstname" name="firstname" required />
            <br />
            <label htmlFor="lastname">*Last Name:</label>
            <input type="text" id="lastname" name="lastname" required /> <br />
            <label htmlFor="email">*Email:</label>
            <input type="email" id="email" name="email" required /> <br />
            <label htmlFor="phone">*Phone:</label>
            <input type="tel" id="phone" name="phone" required /> <br />
            <label htmlFor="phoneType">*Phone Type:</label>
            <select id="phoneType" name="phoneType" required>
              <option value="">Select Phone Type</option>
              <option value="mobile">Mobile</option>
              <option value="home">Home</option>
              <option value="work">Work</option>
            </select>
            <br /> <br />
            <label htmlFor="message">*Message:</label><br />
            <textarea id="message" name="message" rows="5" cols={50}></textarea>
          </fieldset>

          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
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
export default Contacts;
