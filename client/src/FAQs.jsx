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
    },
    {
      question: "What is the purpose of the Pharmacy Text Editor?",
      answer:
        "The Pharmacy Text Editor is a tool that helps pharmacists and healthcare professionals translate sig codes into plain language, making it easier to understand medication instructions.",
    },
    { question: "What are the side effects of getting vaccines?", 
      answer: "Common side effects of vaccines include pain at the injection site, fatigue, headache, muscle pain, chills, fever, and nausea. These side effects are usually mild and temporary." 
    },
    { question: "How can I manage my medications effectively?", 
      answer: "To manage your medications effectively, keep a list of all your medications, set reminders for when to take them, and regularly review your medications with your healthcare provider." 
    },
    { question: "What should I do if I miss a dose of my medication?",
      answer: "If you miss a dose of your medication, take it as soon as you remember. If it's almost time for your next dose, skip the missed dose and continue with your regular schedule. Do not double up on doses." 
    },
    { question: "How can I find out if a drug is safe to take with my other medications?",
      answer: "You can use the Interaction Checker tool on WebRX to check if a drug is safe to take with your other medications. Simply enter the names of the drugs you are taking and the tool will check for potential interactions." 
    },
    { question: "What should I do if I experience side effects from a medication?",
      answer: "If you experience side effects from a medication, contact your healthcare provider immediately. They can help determine if the side effects are serious and if you need to stop taking the medication or adjust the dosage. Always report any side effects to your healthcare provider, even if they seem minor."
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
