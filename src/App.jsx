"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CustomCursor from "./components/CustomCursor";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }

          if (scrollPosition >= offsetTop - 200) {
            setIsVisible((prev) => ({ ...prev, [section]: true }));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", position: "relative" }}>
       <CustomCursor />
      {/* Background Layers */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // background: "linear-gradient(90deg, purple 0%, pink 50%, lightblue 100%)",
          opacity: 0.1,
          zIndex: -2,
        }}
      ></div>

    <div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient( 90deg,rgba(0, 183, 255, 0.06) 0%,rgb(255, 255, 255) 50%,rgba(230, 0, 255, 0.11) 100%)",
    zIndex: -1,
    
  }}
></div>


      {/* Page Sections */}
      <Navbar activeSection={activeSection} />
      <Hero isVisible={isVisible.home} />
      <About isVisible={isVisible.about} />
      <Skills isVisible={isVisible.skills} />
      <Projects isVisible={isVisible.projects} />
      <Contact isVisible={isVisible.contact} />
      <Footer />
      

      {/* Inline styles for global tweaks */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          .form-control:focus {
            background: rgba(255, 255, 255, 0.2) !important;
            border-color: rgba(102, 126, 234, 0.5) !important;
            box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25) !important;
          }
          .form-control::placeholder {
            color: rgba(45, 55, 72, 0.6) !important;
          }
            
        `}
      </style>
    </div>
  );
}
