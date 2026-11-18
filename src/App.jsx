import React from "react";

// Import homepage components.
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      {/* Website navigation */}
      <Navbar />

      {/* Homepage introduction */}
      <Hero />

      {/* Featured courses */}
      <FeaturedCourses />

      {/* Benefits of using Campusly */}
      <WhyChooseUs />
    </>
  );
}

export default App;