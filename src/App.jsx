import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout components shown on every page.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page components (full screens).
import Home from "./pages/Home";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      {/* Website navigation (visible on every page) */}
      <Navbar />

      {/* Routes shows only the page whose path matches the URL.
          Every <Route> MUST be inside <Routes>. */}
      <Routes>
        {/* Homepage: localhost:5173/ */}
        <Route path="/" element={<Home />} />

        {/* Course catalogue: localhost:5173/courses */}
        <Route path="/courses" element={<Courses />} />
      </Routes>

      {/* Website footer (visible on every page) */}
      <Footer />
    </>
  );
}

export default App;