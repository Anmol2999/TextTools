import { useState } from 'react';
import './App.css';
// import About from './components/About.js';
import Form from './components/Form.js';
import Navbar from './components/Navbar.js';


function App() {

  const[mode,setmode]=useState("light") //whether the dark mode is on or not

  const toggleMode=()=>{
    // console.log("working")
      if(mode==="light")
        {
      setmode("dark");
      document.body.style.backgroundColor="rgb(4 1 56)"
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white"

    }

  }   
  return (  
    <>
      <Navbar title="TextTools" mode={mode} toggleMode={toggleMode}/> 
      <div className='container my-3' >
        <Form mode={mode} heading="Enter text"/>
        {/* <About/> */}
        </div>     
    </>
  );
}

export default App;
