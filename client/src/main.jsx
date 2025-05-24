import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModeProvider } from "./ModeContext.jsx"; // Import the ModeProvider
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </StrictMode>,
)
