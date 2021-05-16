import React from "react";

function Project(props) {
  const image = process.env.PUBLIC_URL + "/images/pintos3.jpg";
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          class="card-image w-100 h-100"
          src={props.image}
        ></img>
        <p className="project-name">{props.title}</p>
      </div>
    </div>
  );
}

export default Project;
