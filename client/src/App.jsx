import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import PharmacyTextEditor from "./PharmacyTextEditor";
import InteractionChecker from "./InteractionChecker";
import DrugInformation from "./DrugInformation";
import Scheduler from "./Scheduler";

import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path ="/dashboard" element={<Dashboard />} />
          <Route path="/pharmacy-text-editor" element={<PharmacyTextEditor />} />
          <Route path="/interaction-checker" element={<InteractionChecker/>} />
          <Route path="/drug-information" element={<DrugInformation />} />
          <Route path="/scheduler" element={<Scheduler />} />
        </Routes>
      </Router>
  );
}

export default App;