import React from "react";
import Project from "./Project";
import ProjectsData from "./ProjectsData";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="row">
        <div className="col-sm-4">
          <h2>Projects</h2>
          <p className="projectspage-content">
            2nd year Computing student at Imperial College London
          </p>
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
      </div>
    </div>
  );
}

export default ProjectsPage;
