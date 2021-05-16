import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item py-0">
            <a className="nav-link py-0" href="#">Home</a>
          </li>
          <li className="nav-item py-0">
            <a className="nav-link py-0" href="#">About Me</a>
          </li>
          <li className="nav-item py-0">
            <a className="nav-link py-0" href="#">Projects</a>
          </li>
          <li className="nav-item py-0">
            <a className="nav-link py-0" href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
