import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Form from './components/Form'
import About from './components/About';
import {
  BrowserRouter as Router, // a container for switch/routes
  Routes as Switch, // a container for route
  Route, // routes the app to a particular component
  // Link // we will use it in navbar as navbar contains the button using which we want to link our components to routes. to attribute in <Link> contains the url which we want to access. Now it may appear similar to anchor tag (<a href="url">) but it is different as it switches to that particular link without reloading the page(unlike <a>)
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState("primary");

  function showAlert(message, type) {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null)
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
    // using text-white class for div when light mode enabled so as to differentiate between       navbar(which used text-light) and main content (text-light is a bit greyish)
    <div className={`bg-${mode === "light" ? "white" : "dark"} text-${mode === "light" ? "dark" : "light"}`}>
      <Router>
        <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} theme={theme} setTheme={setTheme} />
        <Alert alert={alert} />
        <div className="container">
          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. These Switches must be kept inside a <Router>. Also, in latest version of react-router-dom, <Switch> has been replaced by <Routes>. So either, we can use <Routes> instead of <Switch> of import <Routes> as <Switch> (this way implemented above) */}
          <Switch>
            {/* path attribute takes the url */}
            {/* element attribute takes the component which will blit on the webpage */}
            <Route path="/" element={<Form heading="Enter the text to analyze" mode={mode} showAlert={showAlert} theme={theme} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Switch>
        </div>
      </Router >
    </div >
  );
}

export default App;