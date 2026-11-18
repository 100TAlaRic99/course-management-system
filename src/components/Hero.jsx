
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT SIDE: Introduction and action buttons */}
      <div className="hero-content">

        {/* Small introductory badge */}
        <div className="hero-badge">
          <i className="bi bi-stars"></i>
          Learning made simpler
        </div>

        {/* Main homepage heading */}
        <h1>
          Your learning journey
          <span> starts here.</span>
        </h1>

        {/* Short description of the platform */}
        <p>
          Discover courses, track your academic progress, and
          achieve your goals with one simple learning platform.
        </p>

        {/* Buttons for visitors */}
        <div className="hero-buttons">

          <a href="#courses" className="hero-primary-btn">
            Explore courses
            <i className="bi bi-arrow-right"></i>
          </a>

          <a href="#about" className="hero-secondary-btn">
            Learn more
          </a>

        </div>

        {/* Supporting information */}
        <div className="hero-note">
          <i className="bi bi-check-circle-fill"></i>
          One platform for your academic journey
        </div>

      </div>

      {/* RIGHT SIDE: Decorative learning dashboard */}
      <div className="hero-visual">

        <div className="hero-visual-card">

          {/* Dashboard heading */}
          <div className="visual-card-header">
            <div>
              <span>YOUR LEARNING SPACE</span>
              <h3>Welcome back!</h3>
            </div>

            <div className="visual-avatar">AM</div>
          </div>

          {/* Course progress indicator */}
          <div className="visual-progress">
            <div>
              <span>Course progress</span>
              <strong>75%</strong>
            </div>

            <div className="visual-progress-track">
              <div></div>
            </div>
          </div>

          {/* First course */}
          <div className="visual-course">
            <div className="visual-course-icon">
              <i className="bi bi-code-slash"></i>
            </div>

            <div>
              <strong>Web Development</strong>
              <span>12 lessons completed</span>
            </div>

            <i className="bi bi-arrow-up-right"></i>
          </div>

          {/* Second course */}
          <div className="visual-course">
            <div className="visual-course-icon visual-course-icon-pink">
              <i className="bi bi-palette"></i>
            </div>

            <div>
              <strong>UI/UX Design</strong>
              <span>8 lessons completed</span>
            </div>

            <i className="bi bi-arrow-up-right"></i>
          </div>

        </div>

        {/* Floating achievement card */}
        <div className="hero-floating-card">

          <div className="floating-icon">
            <i className="bi bi-trophy-fill"></i>
          </div>

          <div>
            <strong>Keep it up!</strong>
            <span>You're making progress</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
