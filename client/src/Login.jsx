// Login.jsx
import React from 'react';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import Mode from './Mode';
import "./Login.css";


const Login = () => {
    const navigate = useNavigate(); // Initializing the navigate function for navigation

    // Function to handle navigation back to the dashboard
    const goBackToDashboard = () => {
        navigate('/'); // Redirects to the dashboard route ('/')
    };
    
    return (
        <div className="login-page">
            <div className="form">
                <form className="register-form">
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form>
                <form className="login-form">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button className="log-on">
                        <span className='btn-txt'>Login</span>
                    </button>
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
            <button onClick={goBackToDashboard} className='button type1'> {/* Button to go back to dashboard */}
                <span className="btn-txt">Dashboard</span> {/* Button label */}
            </button>
            <Mode></Mode>
        </div>
    );
};

export default Login;
