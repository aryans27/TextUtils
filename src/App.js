import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

// to make a custom theme mode, watch the vid 20
function App() {
    const [mode, setMode] = useState('light')     // default mode
    const [alert, setAlert] = useState(null)

    const displayAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#042743'
            document.tile = 'TextUtil-Dark Mode'
            // displayAlert("Dark Mode has been Enabled!", "success")   // to set a changing title bar
            // setInterval(()=>{
            //   document.title='Textutils is Amazing Mode!';
            //  },2000);
            //  setInterval(()=>{
            //   document.title='Install TextUtils Now!'
            //  },1500)
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            document.tile = 'TextUtil-Light Mode'
            displayAlert("Light Mode has been Enabled!", "success")
        }
    }

    return (
        <>
            <Router>
                <Navbar title="TextUtil" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3" >
                    <Routes>
                        <Route path="/about" element={<About mode={mode} />} />

                        <Route path="/" element={<TextForm heading="Enter your Text Here" mode={mode} displayAlert={displayAlert} />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;