import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import PharmacyTextEditor from "./PharmacyTextEditor";

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/codes");
        if (!response.ok) throw new Error('HTTP error');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        data.map(codes => (
          <div key={codes.codeid}>
            <p>{codes.SigCode}</p>
            <p>{codes.translation}</p>
          </div>
        ))
      )}

      <Router>
        <Routes>
          <Route path ="/" element={<Dashboard />} />
          <Route path="/pharmacy-text-editor" element={<PharmacyTextEditor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;