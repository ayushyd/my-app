import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
       setAlert({
        msg: message,
        type: type
       })
       setTimeout(() => {
        setAlert(null);
       },3000);

  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode is enable", "success");
      document.title = 'Text-App -Dark-Mode';
      // setInterval(()=> {
      //   document.title = 'Text-App -Amazing-App';
      // },2000);

      // setInterval(()=> {
      //   document.title = 'Install Text-App';
      // },1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enable", "success");
      document.title = 'Text-App -Light-Mode'

    }
  }
  

  return (
    <>  
      <Navbar title="MYblogs" home="Home" aboutText="About-Site" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert = {alert}/>
      <div className="container">
           <Form showAlert = {showAlert} heading = "Enter Your Text" mode = {mode}/>
      </div>
      
    
    </>    
  );
}

export default App;
