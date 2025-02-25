import { useState } from 'react';
import './App.css';
// import About from './components/About.js';
import Form from './components/Form.js';
import Navbar from './components/Navbar.js';
import Alert from './components/Alert.js';


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
      
    }, 2000);
  }

  const toggleMode=()=>{
    // console.log("working")
      if(mode==="light")
        {
      setmode("dark");
      document.body.style.backgroundColor="rgb(4 1 56)";
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
      <Navbar title="TextTools" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className='container my-3' >
        <Form mode={mode} heading="Enter text"/>
        {/* <About/> */}
        </div>     
    </>
  );
}

export default App;
