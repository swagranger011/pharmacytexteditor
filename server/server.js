// server.js
// Import required modules
const express = require('express'); // Express framework for handling HTTP requests
const mysql = require('mysql2'); // MySQL2 client for Node.js
const cors = require('cors'); // For web security
const path = require('path');

// Create an instance of express
const app = express();
app.use(cors());

// Serve static files from client directory
app.use(express.static(path.join(__dirname, 'client')));

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: "localhost", // Database host
    user: "root",      // Database username
    password: "123456", // Database password
    database: "pharmabase" // Name of the database
});

// Define a route for the root URL '/'
app.get('/', (req, res) => {
    // Respond with a JSON message
    return res.json("From backend side");
});

// API routes
app.get('/api/data', (req, res) => {
  res.json({ message: 'Server data' });
});


// Define a route to fetch all codes from the 'codes' table
app.get('/codes', (req, res) => {
    const sql = "select * from codes"; // SQL query to select all codes
    db.query(sql, (err, data) => { // Execute the SQL query
        if (err) return res.json(err); // If there's an error, return the error
        return res.json(data); // Otherwise, return the data as JSON
    })
});

// Start the server and listen on port 8081
app.listen(8081, () => {
    console.log("listening");
});