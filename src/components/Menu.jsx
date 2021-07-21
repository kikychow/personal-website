import React from "react";
import Navbar from "./Navbar";

function Menu() {
  return (
    <div className="home-page">
      <div className="home-img">
      <Navbar />
        <div className="center-block">
          <p className="subtitle">Hello! I'm</p>
          <h1 className="name">Kiky Chow</h1>
          <div className="icon-container">
            <i className="icon fa fa-envelope-square" />
            <i className="icon fa fa-linkedin-square" />
            <i className="icon fa fa-github-square" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
