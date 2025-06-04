import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import PharmacyTextEditor from "./PharmacyTextEditor";
import InteractionChecker from "./InteractionChecker";
import DrugInformation from "./DrugInformation";
import Scheduler from "./Scheduler";
import Mode from "./Mode";

import './App.css';

function App(){
  return (
      <Router>
        <Routes>
          <Route path ="/" element={<Dashboard />} />
          <Route path="/pharmacy-text-editor" element={<PharmacyTextEditor />} />
          <Route path="/interaction-checker" element={<InteractionChecker/>} />
          <Route path="/drug-information" element={<DrugInformation />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/mode" element={<Mode />} />
        </Routes>
      </Router>
  );
}

export default App;