// File: src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react'; // Added useEffect
import logo from './logo.svg';
import './App.css';

function App() {

    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => { 
    try {
      const response = await fetch('http://localhost:8081/codes');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Fetch attempt completed");
    }
    
    if (loading) return <div>Loading...</div>;
  }, []);
  return (
    <div>
        {data.map((item) => (
          <div key={item.Codeid}>
            // Display the code and its details
            <h2>{item.Codeid}</h2>
          </div>
        ))}
          </div>
        ))}
    </div>
  );
}

export default App;
