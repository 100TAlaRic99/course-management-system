
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    // Main navbar container
    <nav className="navbar">
      {/* Brand / website logo */}
      <a href="/" className="navbar-logo">
        <span className="logo-icon">
          <i className="bi bi-layers-half"></i>
        </span>

        <span>
          campusly<span className="logo-dot">.</span>
        </span>
      </a>

      {/* Main navigation links */}
      <ul className="navbar-links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>

        <li>
          <a href="#courses">Courses</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Account actions */}
      <div className="navbar-actions">
        <a href="#login" className="login-btn">
          Log in
        </a>

        <a href="#register" className="register-btn">
          Get started <i className="bi bi-arrow-up-right"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
