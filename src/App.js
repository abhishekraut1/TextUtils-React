import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
  // Routes
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#171d30';
      showAlert("dark mode enabled!","success")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled!","success")
    }
  };

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    {/* <Router> */}

      <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} aboutText="About Us" />
      <Alert alert={alert} />

      <div className="container my-3">
      {/* <Routes> */}
          {
          // old syntax :
          /* <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          </Route> */}

          {/* new syntax : */}
          {/* <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} /> */}
      {/* </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>

    {/* </Router> */}
    </>
  );
}

export default App;
