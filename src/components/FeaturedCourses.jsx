
import React from "react";
import "./FeaturedCourses.css";

// Sample course data.
// Later, we can fetch this information from our backend/database.
const featuredCourses = [
  {
    id: 1,
    category: "Development",
    title: "Full Stack Web Development",
    description:
      "Learn frontend and backend development by building practical web applications.",
    lessons: 42,
    duration: "12 weeks",
    level: "Beginner",
    icon: "bi-code-slash",
  },
  {
    id: 2,
    category: "Design",
    title: "UI/UX Design Fundamentals",
    description:
      "Understand user experience, wireframing, prototyping, and modern interface design.",
    lessons: 30,
    duration: "8 weeks",
    level: "Beginner",
    icon: "bi-palette",
  },
  {
    id: 3,
    category: "Programming",
    title: "Python Programming",
    description:
      "Build a strong programming foundation with Python and practical exercises.",
    lessons: 36,
    duration: "10 weeks",
    level: "Intermediate",
    icon: "bi-terminal",
  },
];

function FeaturedCourses() {
  return (
    <section className="featured-courses" id="courses">

      {/* Section heading and introduction */}
      <div className="featured-header">

        <span className="featured-label">
          OUR COURSES
        </span>

        <h2>
          Explore our <span>popular courses</span>
        </h2>

        <p>
          Discover learning opportunities designed to help
          you develop skills and achieve your academic goals.
        </p>

      </div>

      {/* Course cards container */}
      <div className="course-grid">

        {/* map() creates one course card for every object in the array. */}
        {featuredCourses.map((course) => (

          <div className="course-card" key={course.id}>

            {/* Course icon */}
            <div className="course-card-icon">
              <i className={`bi ${course.icon}`}></i>
            </div>

            {/* Course category */}
            <span className="course-category">
              {course.category}
            </span>

            {/* Course title and description */}
            <h3>{course.title}</h3>

            <p>{course.description}</p>

            {/* Course information */}
            <div className="course-info">

              <span>
                <i className="bi bi-play-circle"></i>
                {course.lessons} lessons
              </span>

              <span>
                <i className="bi bi-clock"></i>
                {course.duration}
              </span>

            </div>

            {/* Course level and action */}
            <div className="course-card-footer">

              <span className="course-level">
                {course.level}
              </span>

              <a href="#contact" className="course-link">
                View course
                <i className="bi bi-arrow-right"></i>
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedCourses;
