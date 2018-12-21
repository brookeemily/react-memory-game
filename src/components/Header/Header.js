import React from "react";
import "./Header.css";


const Header = props => (
  <div className="container-fluid">

    <nav className="navbar">
     <span className="navbar-brand mb-0 h1">Clicky Game</span>
     <span className="navbar-brand mb-0 h1">Score: {props.currentScore} | Top Score: {props.topScore} </span>
    </nav>

    <div className="jumbotron">
         <h1 className="text-center">Memory Game</h1> 
         <h3 className="text-center">Click on an image to start - don't click on the same image more than once! </h3>
    </div>

  </div>
);

export default Header;
