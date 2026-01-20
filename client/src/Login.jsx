// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import Mode from "./Mode";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // Initializing the navigate function for navigation

  // Function to handle navigation back to the dashboard
  const goBackToDashboard = () => {
    navigate("/"); // Redirects to the dashboard route ('/')
  };

  // registration + login state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  // register handler
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: regUsername,
          name: regName,
          email: regEmail,
          password: regPassword,
        }),
      });
      if (res.ok) {
        navigate("/");
      } else {
        const err = await res.json();
        alert(err.message || "Registration failed");
      }
    } catch (err) {
      alert("Network error");
    }
  };

  // login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: loginUsername,
          password: loginPassword,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        // save token/session as needed
        localStorage.setItem("token", data.token || "");
        navigate("/");
      } else {
        const err = await res.json();
        alert(err.message || "Login failed");
      }
    } catch (err) {
      alert("Network error");
    }
  };

  return (
    <div className="login-page">
      <h1 className="Title">WebRX</h1>
      <div className="form">
        <h2>{showRegister ? "Create Account" : "Login to Your Account"}</h2>
        {showRegister ? (
          <form className="register-form" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="*username"
              value={regUsername}
              onChange={(e) => setRegUsername(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="*name"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="*email address"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="*password"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              required
            />
            <input type="password" placeholder="*confirm password" required />
            <button type="submit" className="log-on">create</button>
            <p className="message">
              Already registered?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegister(false);
                }}
              >
                Sign In
              </a>
            </p>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button type="submit" className="log-on">
              <span className="btn-txt">Login</span>
            </button>
            <p className="message">
              Not registered?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegister(true);
                }}
              >
                Create an account
              </a>
            </p>
          </form>
        )}
      </div>
      <button onClick={goBackToDashboard} className="button type1">
        {" "}
        {/* Button to go back to dashboard */}
        <span className="btn-txt">Dashboard</span> {/* Button label */}
      </button>
      <Mode></Mode>
    </div>
  );
};

export default Login;
