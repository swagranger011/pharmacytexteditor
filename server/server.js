const express = require("express");
const sql = require("mssql"); // Fixed variable name
const cors = require("cors");
const path = require("path");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"], // Match your frontend port
  })
);
app.use(express.json());

// Connection pool
let pool;

//You can use this command to log into the database:  sqlcmd -S localhost -U SA -P '1234S@bc'
async function initDB() {
  try {
    pool = new sql.ConnectionPool({
      server: "localhost",
      user: "SA",
      password: "1234S@bc",
      database: "Sigcodes",
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    });

    await pool.connect();
    console.log("MSSQL Connected!");
  } catch (err) {
    console.error("Connection failed:", err);
    process.exit(1);
  }
}

// Initialize DB connection
initDB();

// Routes
app.get("/codes", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM Codes");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, "client")));

app.listen(8081, () => {
  console.log("Server running on port 8081");
});

app.post('/api/translate', express.json(), async (req, res) => {
  try {
    const { code } = req.body;
    
    if (!code || typeof code !== 'string' || code.length > 50) {
      return res.status(400).json({ error: "Invalid input format" });
    }

    const result = await pool.request()
      .input('inputCode', sql.VarChar, code.toUpperCase()) // Case-insensitive search
      .query('SELECT Translation FROM dbo.Codes WHERE SigCode = @inputCode');

    // Handle empty results
    if (!result.recordset.length) {
      return res.status(404).json({ error: "No translation found for: " + code });
    }

    res.json({ 
      translation: result.recordset[0].translation,
      original: code
    });
  } catch (err) {
    res.status(500).json({ error: "Database error: " + err.message });
  }
});

async function testQuery() {
  try {
    const result = await pool.request().query("SELECT * FROM Codes");
    console.log("Test Query Result:", result.recordset);
  } catch (err) {
    console.error("Test Query Failed:", err);
  }
}
testQuery();