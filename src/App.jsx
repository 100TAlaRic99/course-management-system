import React from "react";

// Import homepage components.
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

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

      {/* Explains how students use Campusly */}
      <HowItWorks />

      {/* Student testimonials */}
      <Testimonials />

      {/* Encourages visitors to get started */}
      <CTA />

      {/* Website footer */}
      <Footer />
    </>
  );
}

export default App;