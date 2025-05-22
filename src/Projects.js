import React from 'react';

const projectList = [
  {
    title: 'Weather App',
    description: 'A simple weather app using React and OpenWeather API.',
    github: 'https://github.com/yourname/weather-app'
  },
  {
    title: 'Task Manager',
    description: 'CRUD app with Node.js and MongoDB.',
    github: 'https://github.com/yourname/task-manager'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projectList.map((proj, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.description}</p>
                  <a href={proj.github} className="btn btn-primary" target="_blank" rel="noreferrer">View on GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
