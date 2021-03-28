import React from "react";
import Navbar from './Navbar'

function Menu() {
  return (
    <div className="menu">
      <div className="row">
        <div className="col-5">
          <img
            className="w-100"
            src={process.env.PUBLIC_URL + "/images/profile.jpg"}
            alt="profile"
          />
        </div>
        <div className="col-7 my-auto">
            <Navbar />
        <h1 className="mb-5">Hello! I'm Kiky.</h1>
        <br />
        <p className="content">2nd year Computing student at Imperial College London</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
