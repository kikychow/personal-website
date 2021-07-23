import React from "react";

function Project(props) {
  const image = process.env.PUBLIC_URL + "/images/pintos3.jpg";
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
      <div
        className="project-card"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${props.image})`,
        }}
      >
        <p className="project-name">{props.title}</p>
      </div>
    </div>
  );
}

export default Project;
