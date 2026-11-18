
import React from "react";

// Import homepage components.
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourses";

function App() {
  return (
    <>
      {/* Website navigation */}
      <Navbar />

      {/* Homepage introduction */}
      <Hero />

      {/* Popular courses displayed below the hero section */}
      <FeaturedCourses />
    </>
  );
}

export default App;
