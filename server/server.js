const express = require('express');
const sql = require('mssql'); // Fixed variable name
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors({
  origin: ["http://localhost:5173"] // Match your frontend port
}));
app.use(express.json());

// Connection pool
let pool;

async function initDB() {
  try {
    pool = new sql.ConnectionPool({
      server: 'localhost',
      user: 'SA',
      password: '1234S@bc',
      database: 'Sigcodes',
      options: {
        encrypt: true,
        trustServerCertificate: true
      }
    });
    
    await pool.connect();
    console.log('MSSQL Connected!');
  } catch (err) {
    console.error('Connection failed:', err);
    process.exit(1);
  }
}

// Initialize DB connection
initDB();

// Routes
app.get('/codes', async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM codes");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'client')));

app.listen(8081, () => {
  console.log("Server running on port 8081");
});