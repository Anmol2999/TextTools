import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Form from './components/Form.js';
import Navbar from './components/Navbar.js';
import Alert from './components/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//for react router info visit "https://v5.reactrouter.com/web/guides"


function App() {
  const[mode,setmode]=useState("light"); //whether the dark mode is on or not
  const [alert, setAlert] = useState(null);

  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);
  }

  const toggleMode=()=>{
    // console.log("working")
      if(mode==="light")
        {
      setmode("dark");
      document.body.style.backgroundColor="rgb(15 25 55)";
      showalert("Dark mode enabled","success");
      // document.title="TextTools-Darkmode"
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showalert("Dark mode disabled","success");

    }

  }   

  return (  
    <>
    <Router>
      <Navbar title="TextTools" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className='container my-3 ' >
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/> 
          <Route exact path="/" element={<Form mode={mode} heading="Enter text"/>}/>
        </Routes>
      </div>   
    </Router>  
    </>
  );
}

export default App;
