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

const corsOptions = { //For communicating with frontend
    origin: ["http://localhost:5174"],
};

app.use(cors(corsOptions)); // Enable CORS for the specified origin

async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'Sigcodes',
      port: 3306 //1434
    });
    console.log('Connected to database!');
    return connection;
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
}

// Use the connection
connectDB();

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