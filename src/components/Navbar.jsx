import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Experience</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
