import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/Header.css';
// import Border from './Border';

function Header() {
  return (
    <>
    <header className="header">
      <h1>Nina's Portfolio</h1>
      <nav className="menu">
        <ul>
          <li className="button"><Link to="/about">About Me</Link></li>
          <li className="button"><Link to="/portfolio">Portfolio</Link></li>
          <li className="button"><Link to="/resume">Resume</Link></li>
          <li className="button"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    {/* <Border /> */}
    </>
  );
}

export default Header;