import React from "react";

const Header = () => (
  <div className="container-fluid">

    <nav class="navbar navbar-light bg-light">
     <span class="navbar-brand mb-0 h1">Clicky Game</span>
     <span class="navbar-brand mb-0 h1">Click an image to begin!</span>
     <span class="navbar-brand mb-0 h1">Score: | Top Score: </span>
    </nav>

    <div className="jumbotron">
         <h1 className="text-center">Memory Game</h1> 
         <h3 className="text-center">Click on an image to start - don't click on the same image more than once! </h3>
    </div>

  </div>
);

export default Header;
