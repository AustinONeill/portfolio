import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center">I’m a programmer with a passion for building web applications and solving technical problems.</p>
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <h5>Tech Stack:</h5>
            <ul className="list-group">
              <li className="list-group-item">JavaScript, React, Node.js</li>
              <li className="list-group-item">HTML, CSS, Bootstrap</li>
              <li className="list-group-item">MongoDB, Express</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
