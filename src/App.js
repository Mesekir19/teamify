import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import bgImage from "./assets/image1.png";
import "./index.css";
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <div className="fixed inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <Navbar setPage={setCurrentPage} currentPage={currentPage} />

        {currentPage === "home" && <Home setPage={setCurrentPage} />}
        {currentPage === "signup" && <SignUp />}
        {currentPage === "pricing" && <Pricing />}
        {currentPage === "features" && <Features />}
        {currentPage === "about" && <AboutUs />}
        {currentPage === "contact" && <ContactUs />}
      </div>
    </div>
  );
}

export default App;
