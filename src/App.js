import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Form from './components/Form'
import About from './components/About'

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({ msg: null, type: "" });
  const [theme, setTheme] = useState("primary");

  function showAlert(message, type) {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert({ msg: null, type: "" })
    }, 1500);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark")
      showAlert("Dark Mode Enabled!", "Success")
      document.querySelector("html").style.backgroundColor = "#212529";
    }
    else {
      setMode("light")
      showAlert("Light Mode Enabled!", "Success")
      document.querySelector("html").style.backgroundColor = "white";
    }
    setTheme(theme);
  }

  return (
    <div className={`bg-${mode === "light" ? "white" : "dark"} text-${mode === "light" ? "dark" : "light"}`}>
      <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} theme={theme} setTheme={setTheme} />
      <Alert alert={alert} />
      <div className="container">
        <Form heading="Enter the text to analyze" mode={mode} showAlert={showAlert} theme={theme} />
        <About mode={mode} />
      </div>
    </div >
  );
}

export default App;