import React, { useState } from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses";
import "./Courses.css";

// Build the category list from the data, so new categories appear automatically.
// new Set() removes duplicates; [...] turns it back into an array.
const categories = ["All", ...new Set(courses.map((course) => course.category))];

function Courses() {
  // useState stores values that change; React re-renders when they change.
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Keep only courses that match BOTH the search text and the selected category.
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="courses-page">

      {/* Page heading */}
      <div className="courses-header">
        <span className="courses-label">COURSE CATALOGUE</span>
        <h1>Explore our <span>courses</span></h1>
        <p>Find the right course for your academic journey and start learning today.</p>
      </div>

      {/* Search box + category filters */}
      <div className="courses-toolbar">
        <div className="courses-search">
          <i className="bi bi-search"></i>
          {/* Controlled input: value comes from state, onChange updates state */}
          <input
            type="text"
            placeholder="Search courses..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              // Template literal adds "active" only to the selected button.
              className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="courses-count">Showing {filteredCourses.length} of {courses.length} courses</p>

      {/* Conditional rendering: show cards if results exist, otherwise an empty message */}
      {filteredCourses.length > 0 ? (
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div className="catalogue-card" key={course.id}>
              <div className="catalogue-card-top">
                <span className="catalogue-icon"><i className={`bi ${course.icon}`}></i></span>
                <span className="catalogue-level">{course.level}</span>
              </div>

              <span className="catalogue-category">{course.category}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <div className="catalogue-meta">
                <span><i className="bi bi-clock"></i> {course.duration}</span>
                <span><i className="bi bi-journal-text"></i> {course.lessons} lessons</span>
                <span><i className="bi bi-star-fill"></i> {course.rating}</span>
              </div>

              <div className="catalogue-footer">
                <span>{course.instructor}</span>
                {/* Link changes the URL without reloading the page.
                    The details page itself is built in a later step. */}
                <Link to={`/courses/${course.id}`}>
                  View details <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="courses-empty">
          <i className="bi bi-search"></i>
          <h3>No courses found</h3>
          <p>Try a different search term or category.</p>
        </div>
      )}
    </section>
  );
}

export default Courses;