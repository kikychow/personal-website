import React from "react";
import Project from "./Project";
import ProjectsData from "./ProjectsData";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="layout-row">
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          <div
            className="project-card"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/personal-website/images/coding.jpg")`,
            }}
          >
            <div className="section-title">
              <h1>Projects</h1>
            </div>
          </div>
        </div>
        {ProjectsData.map((props) => (
          <Project
            key={props.id}
            image={props.image}
            title={props.title}
            url={props.url}
            description={props.description}
          />
        ))}
        <div
          className="col-lg-6 col-md-12 col-sm-12 col-12 project-card"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/personal-website/images/coming.jpg")`,
          }}
        >
          <h1 className="center-block">And more coming ...</h1>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
