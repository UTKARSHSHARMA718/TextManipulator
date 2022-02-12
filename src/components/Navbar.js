import React from 'react'
///\/\/\/\/\//\/ to use or set propTypes of props
import propTypes from 'prop-types';
// import { Link } from "react-router-dom";

export default function Navbar(props) {

    return (
 

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Text Manipulator
    
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
     

          <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
        
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
        </li>
        <li className="nav-item">
      

          <a className="nav-link" href="/about">{props.a}</a>
     
          {/* <Link className="nav-link" to="/about">About</Link> */}
        </li>
       
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>

<div className="d-flex">
{/* To create a square button, these "bg-primary rounded mx-3" all are the classes of bootstrap */}
  <div className="bg-primary rounded mx-3" style={{height:'30px',width:'30px'}}   onClick={()=>{props.togglecolor("primary")}}></div>
  <div className="bg-warning rounded mx-3" style={{height:'30px',width:'30px'}}   onClick={()=>{props.togglecolor("warning")}}></div>
  <div className="bg-danger rounded mx-3" style={{height:'30px',width:'30px'}}   onClick={()=>{props.togglecolor("danger")}}></div>
  <div className="bg-dark rounded mx-3" style={{height:'30px',width:'30px'}}   onClick={()=>{props.togglecolor("dark")}}></div>
  <div className="bg-light rounded mx-3" style={{height:'30px',width:'30px'}}   onClick={()=>{props.togglecolor("light")}}></div>
  <div className="bg-success rounded mx-3" style={{height:'30px',width:'30px'}}   onClick={()=>{props.togglecolor("success")}}></div>

  {/* || ()=>props.toggle("success") || we done this because in ||onclick|| we want function not the function call */}

</div>




  <div className="form-check form-switch " >
  <input className="form-check-input" type="checkbox" onClick={props.toggle} id="flexSwitchCheckDefault" /> 
  <label className={`form-check-label text-${props.mode ==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >{props.mode} Mode</label>
</div>

</nav>


    )
}

// Declaring datatypes of each variable that we are using with props in function Navbar
Navbar.propTypes ={
  title: propTypes.string.isRequired,
  link: propTypes.string.isRequired
}

Navbar.defaultProps = {
  title:"Set a title",
  link :"set a link"
}