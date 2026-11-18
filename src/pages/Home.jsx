import React from "react";

// Import homepage sections.
// "../" goes up one folder (from pages/ to src/) before entering components/.
import Hero from "../components/Hero";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

// Home page = all homepage sections combined into one screen.
// Navbar and Footer are NOT here; App.jsx shows them on every page.
function Home() {
  return (
    <>
      {/* Homepage introduction */}
      <Hero />

      {/* Featured courses */}
      <FeaturedCourses />

      {/* Benefits of using Campusly */}
      <WhyChooseUs />

      {/* Explains how students use Campusly */}
      <HowItWorks />

      {/* Student testimonials */}
      <Testimonials />

      {/* Encourages visitors to get started */}
      <CTA />
    </>
  );
}

export default Home;