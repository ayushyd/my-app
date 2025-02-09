import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from "./components/Alert";
import About from "./components/About";
import { Routes, Route } from "react-router-dom"; 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
      document.title = 'Text-App - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = 'Text-App - Light Mode';
    }
  };

  return (
    <>  
      <Navbar title="Text-App" home="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Form showAlert={showAlert} heading="Enter Your Text" mode={mode} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </>    
  );
}

export default App;
