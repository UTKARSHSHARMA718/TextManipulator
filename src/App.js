// import logo from './logo.svg';
import "./App.css";

import Navbar from "./components/Navbar";

import Textarea from "./components/Textarea";

import About from "./components/About";

import { useState } from "react";

import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// let name="asshole";
function App() {
  const [alerts, setAlerts] = useState(null);

  const show_alert = (Messagesssss, Typeeeee) => {
    setAlerts({
      message: Messagesssss,
      type: Typeeeee,
    });

    //to end the alert function after 2sec
    setTimeout(show_alert, 2000);
  };
  const [mode, setMode] = useState("light");

  const toggle1 = () => {
    if (mode === "dark") {
      removeclasses();
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("mytext").style.backgroundColor = "white";
      document.getElementById("mytext").style.color = "black";
      show_alert("Light mode has been enabled", "success");
    } else {
      removeclasses();
      setMode("dark");
      document.body.style.backgroundColor = "#41529e";
      document.body.style.color = "white";
      document.getElementById("mytext").style.backgroundColor = "black";
      document.getElementById("mytext").style.color = "white";
      show_alert("Dark mode has been enabled", "success");
    }
  };

  const removeclasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-danger");
  };
  const colortoggle1 = (cls) => {
    removeclasses();
    document.body.classList.add("bg-" + cls); //to set different classes to change colour

    document.body.style.color = "white";
    document.getElementById("mytext").style.color = "white";
    //  document.getElementsByClassName('btn-primary').style.backgroundColor='red';
    document.getElementById("f1").style.backgroundColor = "grey";
    document.getElementById("f2").style.backgroundColor = "grey";
    document.getElementById("f3").style.backgroundColor = "grey";
    document.getElementById("f4").style.backgroundColor = "grey";
    document.getElementById("f5").style.backgroundColor = "grey";
    document.getElementById("f6").style.backgroundColor = "grey";

    document.getElementById("f1").style.borderColor = "grey";
    document.getElementById("f2").style.borderColor = "grey";
    document.getElementById("f3").style.borderColor = "grey";
    document.getElementById("f4").style.borderColor = "grey";
    document.getElementById("f5").style.borderColor = "grey";
    document.getElementById("f6").style.borderColor = "grey";
  };

  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React or fuck off
    //     </a>
    //   </header>
    // </div>
    <>
      {/* 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Basic model
    
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.link}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
  {/* link="About" */}
      <Navbar
        title="Home"
      
        mode={mode}
        toggle={toggle1}
        togglecolor={colortoggle1}
      />
      {/* <Navbar  mode ={mode} toggle={toggle1} /> */}

      <Alert alerts={alerts} />

      {/* <Navbar /> */}
      {/* we always have to make components inside src folder onlythen it will work  */}

      {/* <div className='container my-3'>
<Textarea heading="Please enter your sample text"  show_alert={show_alert}/>
    </div> */}
        <div className="container my-3">
      <Router>
          <Switch>
            <Route exact path="/about" key="about"> <About /></Route>
  
            <Route exact path="/" key="textarea"> <Textarea  heading="Please enter your sample text" show_alert={show_alert} /> </Route>     
           
          </Switch>
      </Router>
        </div>
      {/* <About /> */}
    </>
  );
}

export default App;
