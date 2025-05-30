const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors({
  origin: ["http://localhost:5173"]
}));
app.use(express.json());

// Connection pool setup
const pool = new sql.ConnectionPool({
  server: 'localhost',
  user: 'SA',
  password: '1234S@bc',
  database: 'master',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
});

// Connect to database and start server
async function startServer() {
  try {
    // 1. Connect to database
    await pool.connect();
    console.log('MSSQL Connected!');

    const dbCheck = await pool.request().query("SELECT DB_NAME() AS CurrentDB");
    console.log("Using database:", dbCheck.recordset[0].CurrentDB);
    
    // 2. Verify connection with test query
    try {
      const result = await pool.request().query("SELECT * FROM dbo.Codes");
      console.log("Test Query Successful:", result.recordset.length, "records found");
    } catch (testErr) {
      console.error("Test Query Failed:", testErr);
    }

    // 3. Start server AFTER database connection
    app.listen(8081, () => {
      console.log("Server running on port 8081");
    });
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
}

// Routes
app.get('/codes', async (req, res) => {
  try {
    // Verify pool is connected
    if (!pool.connected) {
      return res.status(500).json({ error: "Database not connected" });
    }
    
    const result = await pool.request().query("SELECT * FROM dbo.Codes");
    res.json(result.recordset);
  } catch (err) {
    console.error("Route error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/Codes", express.json(), async (req, res) => {
  try {
    const { code } = req.body;

    if (!pool.connected) {
      return res.status(500).json({ error: "Database not connected" });
    }

    // Split input by semicolon or whitespace, trim, and filter out empty strings
    const codes = code
      .split(/[;\s]+/)
      .map(c => c.trim())
      .filter(Boolean);

    if (codes.length === 0) {
      return res.status(400).json({ error: "No valid codes provided" });
    }

    // Build parameterized query for all codes
    const request = pool.request();
    const params = codes.map((c, i) => {
      const paramName = `code${i}`;
      request.input(paramName, sql.VarChar, c);
      return `@${paramName}`;
    });

    const query = `
      SELECT SigCode, Translation
      FROM dbo.Codes
      WHERE SigCode IN (${params.join(",")})
    `;

    const result = await request.query(query);

    if (result.recordset.length === 0) {
      return res.status(404).json({ error: "No codes found" });
    }

    // Map found codes to translations
    const translations = {};
    result.recordset.forEach(row => {
      translations[row.SigCode] = row.Translation;
    });

    // Build response for all input codes (including not found)
    const response = codes.map(c => ({
      code: c,
      translation: translations[c] || null
    }));

    res.json({ translations: response });
  } catch (err) {
    console.error("Translation error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/check-interactions", express.json(), async (req, res) => {
  const { drugs } = req.body;
  if (!Array.isArray(drugs) || drugs.length < 2) {
    return res.status(400).json({ error: "Provide at least two drugs." });
  }

  try {
    // Build dynamic SQL for all pairs
    let conditions = [];
    let request = pool.request();
    let paramIdx = 0;
    for (let i = 0; i < drugs.length; i++) {
      for (let j = i + 1; j < drugs.length; j++) {
        const a = `drugA${paramIdx}`;
        const b = `drugB${paramIdx}`;
        request.input(a, sql.NVarChar, drugs[i]);
        request.input(b, sql.NVarChar, drugs[j]);
        conditions.push(`((da.Name = @${a} AND db.Name = @${b}) OR (da.Name = @${b} AND db.Name = @${a}))`);
        paramIdx++;
      }
    }
    const whereClause = conditions.join(" OR ");
    const query = `
      SELECT da.Name AS DrugA, db.Name AS DrugB, di.Severity, di.Description, di.Management
      FROM DrugInteractions di
      JOIN Drugs da ON di.Drug1ID = da.DrugID
      JOIN Drugs db ON di.Drug2ID = db.DrugID
      WHERE ${whereClause}
    `;
    const result = await request.query(query);
    res.json({ interactions: result.recordset });
  } catch (err) {
    console.error("Interaction check error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'client')));

// Start everything
startServer();