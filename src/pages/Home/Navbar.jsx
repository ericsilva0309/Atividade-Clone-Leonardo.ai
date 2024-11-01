// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import './Navbar.css';

export const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Define true se o scrollY for maior que 0
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/leonardo-logo-white.svg" alt="" />
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#solutions">Solutions</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#teams">For Teams</a></li>
        <li><a href="#developers">For Developers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="launch-button">Launch App</button>
    </nav>
  );
};

export default Navbar;
