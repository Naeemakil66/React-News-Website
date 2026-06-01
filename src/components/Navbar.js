import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={() => setIsMobileOpen(false)}>
        The Daily Chronicle
      </Link>
      
      <button className="mobile-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${isMobileOpen ? 'show' : ''}`}>
        <li><NavLink to="/" onClick={() => setIsMobileOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/news" onClick={() => setIsMobileOpen(false)}>Latest News</NavLink></li>
        <li><NavLink to="/about" onClick={() => setIsMobileOpen(false)}>About Us</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setIsMobileOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;