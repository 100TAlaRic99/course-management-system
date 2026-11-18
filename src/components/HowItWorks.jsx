import React from "react";
import "./HowItWorks.css";

// Steps explaining how students use Campusly.
const steps = [
  {
    id: 1,
    icon: "bi-person-plus",
    title: "Create Your Account",
    description:
      "Sign up and access your personalized academic learning space.",
  },
  {
    id: 2,
    icon: "bi-journal-bookmark",
    title: "Explore Your Courses",
    description:
      "Browse your courses, learning materials and academic resources.",
  },
  {
    id: 3,
    icon: "bi-graph-up",
    title: "Track Your Progress",
    description:
      "Monitor your assignments, attendance and academic performance.",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">

      {/* Section introduction */}
      <div className="how-header">
        <span>HOW IT WORKS</span>

        <h2>
          Your learning journey,
          <span> made simple</span>
        </h2>

        <p>
          Get started with Campusly in three simple steps
          and stay organized throughout your academic journey.
        </p>
      </div>

      {/* Render each step from the steps array */}
      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>

            {/* Step number */}
            <span className="step-number">
              0{step.id}
            </span>

            {/* Step icon */}
            <div className="step-icon">
              <i className={`bi ${step.icon}`}></i>
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default HowItWorks;