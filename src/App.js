


import React, { useState } from "react";
import Navbar from './component/Navbar';

import Textform from "./component/Textform";
// import WordCounter from "./component/WordCounter";
import Assignment1 from "./component/Assignment1";
import About from "./component/About";
import Cardrate from "./component/Cardrate";
import Alert from "./component/Alert";
import Alert2 from "./component/Alert2.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);


  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#6c757d';
      showalert("dark mode has been enable", "success");


    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enable", "success");

    }
  }



  return (
    <>
      <Router>
        <Navbar mode={mode} togglemode={togglemode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-12 my-3">
              <Routes>
                <Route path="/about" element={<About></About>}>  </Route>
                <Route path="/" element={<Textform showalert={showalert} mode={mode} ></Textform>}>                  
                </Route>
              </Routes>
            </div>
          </div>
        </div>

      </Router>


    </>
  )
}
export default App;
