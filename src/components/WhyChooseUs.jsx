
import React from "react";

// Import the CSS file for this component.
import "./WhyChooseUs.css";

// Sample features that explain the benefits of Campusly.
const features = [
  {
    id: 1,
    icon: "bi-mortarboard",
    title: "Quality Education",
    description:
      "Access structured courses designed to help you build practical knowledge and skills.",
  },
  {
    id: 2,
    icon: "bi-person-video3",
    title: "Expert Faculty",
    description:
      "Learn from experienced instructors who guide you throughout your learning journey.",
  },
  {
    id: 3,
    icon: "bi-graph-up-arrow",
    title: "Track Your Progress",
    description:
      "Monitor your course completion, attendance, assignments and academic performance.",
  },
  {
    id: 4,
    icon: "bi-calendar-check",
    title: "Easy Management",
    description:
      "Keep track of your timetable, deadlines and academic activities in one place.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="features">

      {/* Section heading */}
      <div className="why-header">
        <span>WHY CAMPUSLY?</span>

        <h2>
          Everything you need to
          <span> learn and grow</span>
        </h2>

        <p>
          A smarter way to manage your learning journey,
          academic activities and educational progress.
        </p>
      </div>

      {/* Feature cards */}
      <div className="features-grid">

        {/* map() generates a card for each feature object. */}
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>

            {/* Dynamic Bootstrap icon */}
            <div className="feature-icon">
              <i className={`bi ${feature.icon}`}></i>
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;
