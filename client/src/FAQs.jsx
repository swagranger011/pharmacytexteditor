import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mode from "./Mode";
import "./Mode.css";
const FAQs = () => {
  const [faqs] = useState([
    {
      question: "What is WebRX?",
      answer:
        "WebRX is a web application designed to help users manage their medications, check for drug interactions, and get information about drugs.",
    },
    {
      question: "How do I use the Interaction Checker?",
      answer:
        "To use the Interaction Checker, enter the names of the drugs you want to check for interactions and click 'Check Interactions'.",
    },
    {
      question: "Where can I find drug information?",
      answer:
        "You can find drug information by navigating to the 'Drug Information' section and entering the name of the drug.",
    },
    {
      question: "What is a Scheduled drug or medication?",
      answer:
        "A Scheduled drug or medication is one that is classified under a specific schedule due to its potential for abuse or dependence. They are also known as controlled substances and are regulated by law.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact support by navigating to the 'Contact Us' section and filling out the contact form.",
    },
    {
      question: "How do I log in?",
      answer:
        "To log in, click the 'Login' button on the dashboard and enter your credentials. If you don't have an account, you can register from the login page.",
    },
    {
      question: "How are controlled substances classified?",
      answer:
        "Controlled substances are classified into schedules based on their potential for abuse, medical use, and safety. The schedules range from Schedule I (high potential for abuse, no accepted medical use) to Schedule V (low potential for abuse, accepted medical use). Schedule II drugs, for example, have a high potential for abuse but are accepted for medical use with severe restrictions.",
    }
  ]);

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
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <main className="dashboard-main">
        <h2>FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
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

export default FAQs;
