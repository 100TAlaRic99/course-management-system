import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">

      {/* Footer brand information */}
      <div className="footer-container">

        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <i className="bi bi-mortarboard-fill"></i>
            campusly<span>.</span>
          </a>

          <p>
            A smarter way to manage your learning journey,
            academic activities and educational progress.
          </p>

          {/* Social media links */}
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="#" aria-label="Twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#features">About</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>

        {/* Learning platform information */}
        <div className="footer-links">
          <h3>Learning</h3>

          <ul>
            <li><a href="#courses">Explore Courses</a></li>
            <li><a href="#get-started">Get Started</a></li>
            <li><a href="#">Student Portal</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Contact information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>
            <i className="bi bi-envelope"></i>
            <span>support@campusly.com</span>
          </p>

          <p>
            <i className="bi bi-telephone"></i>
            <span>+91 00000 00000</span>
          </p>

          <p>
            <i className="bi bi-geo-alt"></i>
            <span>Mumbai, India</span>
          </p>
        </div>

      </div>

      {/* Copyright section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Campusly. All rights reserved.
        </p>

        <p>Designed for better learning.</p>
      </div>

    </footer>
  );
}

export default Footer;