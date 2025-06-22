"use client";

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronUp,
  Instagram,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="pt-5 pb-3 text-light"
      style={{
        background: "linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        overflow:"hidden"
      }}
    >
      <div className="container">
        <div className="row g-5">
          {/* Brand Info */}
          <div className="col-md-6 col-lg-4">
            <h3
              className="fw-bold mb-3"
              style={{
                background: "linear-gradient(135deg, #8e9eab 0%, #eef2f3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Santhosh.dev
            </h3>
            <p className="text-secondary">
              Full Stack Developer passionate about building interactive
              web experiences. Let’s craft something awesome together!
            </p>
            {/* Tech Stack Badges */}
            <div className="d-flex flex-wrap gap-2 mt-3">
              {["React", "Node.js", "MongoDB", "Express", "Bootstrap"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="badge rounded-pill text-bg-light text-dark"
                    style={{ background: "rgba(255,255,255,0.1)", fontSize: "0.8rem" }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-2">
            <h5 className="fw-bold mb-3">Links</h5>
            <ul className="list-unstyled">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <li key={link} className="mb-2">
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-decoration-none text-secondary"
                    style={{ transition: "0.3s" }}
                    onMouseOver={(e) => (e.target.style.color = "#f0e7ff")}
                    onMouseOut={(e) => (e.target.style.color = "#adb5bd")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Get in Touch</h5>
            <p className="d-flex align-items-center text-secondary">
              <Mail size={18} className="me-2 text-light" />
              <a href="mailto:shivasanthosh1707@gmail.com" className="text-decoration-none text-secondary">
                shivasanthosh1707@gmail.com
              </a>
            </p>
            <p className="d-flex align-items-center text-secondary">
              <Phone size={18} className="me-2 text-light" />
              +91 9182868227
            </p>
            <p className="d-flex align-items-center text-secondary">
              <MapPin size={18} className="me-2 text-light" />
              LB. Nagar, Hyderabad
            </p>

            {/* Social Links */}
            <div className="d-flex gap-3 mt-3">
              <a href="https://github.com/shivasanthosh17071" target="_blank" className="text-light">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/shiva-santhosh-reddy-devarapally-352319293/" target="_blank" className="text-light">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/santhosh.dev_/" target="_blank" className="text-light">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Newsletter + Extras */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="text-secondary small">
              Get project updates and dev tips delivered to your inbox.
            </p>
            <div className="input-group input-group-sm">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
              />
              <button className="btn btn-light" type="button">
                <Send size={16} />
              </button>
            </div>
            {/* Inspiring Quote */}
            <blockquote className="mt-4 text-light small fst-italic">
              “Code is like humor. When you have to explain it, it’s bad.”
            </blockquote>
          </div>
        </div>

        <hr className="my-4 border-light opacity-25" />

        <div className="d-md-flex justify-content-between align-items-center">
          <p className="text-secondary mb-0">
            © {currentYear} Santhosh.dev. All rights reserved.
          </p>
          <div className="d-flex gap-3 mt-3 mt-md-0">
            <a href="#" className="text-secondary small">Privacy</a>
            <a href="#" className="text-secondary small">Terms</a>
            <a
              href="https://github.com/shivasanthosh17071 "
              className="text-secondary small"
              target="_blank"
            >
              View GitHub Stats
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="btn btn-light position-fixed"
          style={{
            padding:"2px",
            width:"45px",
            height:"45px",
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            // boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            zIndex: 1000,
          }}
        >
          <ChevronUp />
        </button>
      )}
    </footer>
  );
}
