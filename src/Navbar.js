import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">
      <div className="container">
        <a className="navbar-brand accent" href="#">Austin O'Neill</a>
        <div className="d-flex gap-3">
          <a href="#projects" className="nav-link text-light">Projects</a>
          <a href="#about" className="nav-link text-light">About</a>
          <a href="#contact" className="nav-link text-light">Contact</a>
        </div>
      </div>
    </nav>
  );
}

