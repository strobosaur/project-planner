import React from 'react';

const ProjectSummary = ({project}) => {
  return (    
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by the posters</p>
        <p className="grey-text">2021-10-21, 19:24</p>
      </div>
    </div>
  );
}
 
export default ProjectSummary;