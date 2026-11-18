import React from "react";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section" id="get-started">

      {/* CTA content */}
      <div className="cta-content">
        <span className="cta-label">START YOUR JOURNEY</span>

        <h2>
          Ready to take your
          <span> learning further?</span>
        </h2>

        <p>
          Organize your courses, track your progress and make
          your academic journey simpler with Campusly.
        </p>

        {/* CTA buttons */}
        <div className="cta-buttons">
          <a href="#courses" className="cta-primary">
            Get started <i className="bi bi-arrow-right"></i>
          </a>

          <a href="#about" className="cta-secondary">
            Learn more
          </a>
        </div>
      </div>

    </section>
  );
}

export default CTA;