import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu arcu eget eros ultrices tempor ut eget nisl. Ut ullamcorper odio nisi, et gravida erat ultricies ultricies. Donec fringilla tincidunt mauris, vitae placerat magna hendrerit sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut imperdiet lorem et dolor interdum imperdiet. Cras vel malesuada ipsum, non mollis nulla. Nullam rhoncus diam nunc. Sed at lacus ut dolor accumsan cursus ac a massa. Proin pretium ultricies nisl in pharetra. Mauris dictum faucibus interdum.</p>
        </div>
        <div className="card-action lighten-4 grey-text">
          <div>Posted by posters</div>
          <div>2021-10-21, 19:42</div>
        </div>
      </div>
    </div>
  );
}
 
export default ProjectDetails;