import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img src="logo.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="cta-button">Get in Touch</button>
      </nav>
    </header>
  );
};

export default Header;
