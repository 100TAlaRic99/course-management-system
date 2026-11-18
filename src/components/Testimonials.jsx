import React from "react";
import "./Testimonials.css";

// Sample student testimonials.
const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Computer Science Student",
    rating: 5,
    quote:
      "Campusly makes it easy to keep track of my courses, assignments and academic progress. Everything is organized in one place.",
    initials: "AS",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Design Student",
    rating: 5,
    quote:
      "I love how simple the platform is to use. I can quickly find my learning resources and manage my academic schedule.",
    initials: "PP",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "IT Student",
    rating: 5,
    quote:
      "Having my coursework, deadlines and progress together helps me stay organized and focused on my learning goals.",
    initials: "RM",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      {/* Section introduction */}
      <div className="testimonials-header">
        <span>STUDENT EXPERIENCES</span>

        <h2>
          What our students
          <span> say about us</span>
        </h2>

        <p>
          Discover how Campusly helps students organize
          their learning and stay on track.
        </p>
      </div>

      {/* Testimonial cards */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>

            {/* Star rating */}
            <div className="testimonial-rating">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <i className="bi bi-star-fill" key={index}></i>
              ))}
            </div>

            {/* Student feedback */}
            <p className="testimonial-quote">
              "{testimonial.quote}"
            </p>

            {/* Student information */}
            <div className="testimonial-user">

              {/* Initials avatar */}
              <div className="testimonial-avatar">
                {testimonial.initials}
              </div>

              <div className="testimonial-details">
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Testimonials;