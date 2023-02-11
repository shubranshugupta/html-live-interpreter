import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  function showAlert(message, type, label) {
    setAlert({
      msg: message,
      type: type,
      label: label
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.className = 'text-light';
      document.body.style.backgroundColor = '#222e38';
      showAlert('Dark Mode Enabled', 'success', 'info-fill');
    } else {
      setMode('light');
      document.body.className = 'text-dark';
      document.body.style.backgroundColor = '#f4faff';
      showAlert('Light Mode Enabled', 'success', 'info-fill');
    }
  }

  return (
    <Router>
      <Navbar title="HTML LI" searchBar={true} theme={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Switch>
        <Route exact path="/" element={
          <TextArea heading="Type HTML Code" placeHolder="Enter Html code" theme={mode} showAlert={showAlert} />
        } />
        
        <Route exact path="/about" element={
          <About theme={mode} />
        } />
      </Switch>

    </Router>
  );
}

export default App;
