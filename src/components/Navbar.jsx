import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    // Main navbar container
    <nav className="navbar">
      {/* Brand / website logo: Link goes to the homepage without reloading */}
      <Link to="/" className="navbar-logo">
        <span className="logo-icon">
          <i className="bi bi-layers-half"></i>
        </span>

        <span>
          campusly<span className="logo-dot">.</span>
        </span>
      </Link>

      {/* Main navigation links */}
      <ul className="navbar-links">
        <li>
          {/* NavLink automatically adds className="active" when its URL matches.
              "end" = only active on exactly "/", not on "/courses" too. */}
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>

        <li>
          {/* About and Contact are still sections on the homepage.
              "/#about" = go to the homepage, then scroll to id="about". */}
          <a href="/#about">About</a>
        </li>

        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>

      {/* Account actions (these pages are built in Phase 3) */}
      <div className="navbar-actions">
        <Link to="/login" className="login-btn">
          Log in
        </Link>

        <Link to="/register" className="register-btn">
          Get started <i className="bi bi-arrow-up-right"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;