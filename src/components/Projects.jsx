"use client";
import { Github, ExternalLink } from "lucide-react";
import Swiggy from "../assets/images/swiggy.png";
import SSherbal from "../assets/images/SS-herbal.png";
import BlackNykee from "../assets/images/blacknykee.png";

export default function Projects({ isVisible }) {
  const projects = [
    {
      title: "Swiggy-Clone-App",
      description:
        "A food delivery application inspired by Swiggy, built with React, Node.js and Express.js. Features include real-time restaurant and dish search, user authentication, cart functionality, and order management with responsive UI and seamless user experience.",
      tech: ["React", "Node.js", "Express","Bootstrap"],
      image: Swiggy,
      github: "https://github.com/shivasanthosh17071/swiggy-main",
      demo: "https://santhoshswiggy.vercel.app/",
    },
    {
      title: "BlackNykee Shopping",
      description:
        "A stylish fashion brand website built with React + Vite and Bootstrap, designed to showcase modern apparel collections. Features include responsive layouts, smooth navigation, collection highlights, and a visually rich UI that reflects the brand’s bold identity.",
      tech: ["React", "Node.js", "MongoDb","Express.js","Bootstrap"],
      image: BlackNykee,
      github: "https://github.com/shivasanthosh17071/blacknykee",
      demo: "https://blacknykee.vercel.app/",
    },
    {
      title: "SS Herbal Beauty",
      description:
        "A modern website for SS Herbal Beauty, showcasing natural skincare and wellness products. Built with React for a smooth user experience, featuring product listings, contact form, responsive design, and brand-focused visuals to enhance customer engagement.",
      tech: ["React + Vite", "Bootstrap"],

      image: SSherbal,
      github: "https://github.com/shivasanthosh17071/ss-herbal",
      demo: "https://ss-herbal.vercel.app/",
    },
    // {
    //   title: "Social Media Analytics",
    //   description:
    //     "Analytics dashboard for social media metrics with data visualization, reporting features, and automated insights.",
    //   tech: ["React", "D3.js", "Node.js", "MongoDB"],
    //   image: "/placeholder.svg?height=200&width=300",
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
  ];

  const techColors = {
    React: "#61DAFB",
    "Node.js": "#339933",
    MongoDB: "#47A248",
    Express: "#000000",
    "Socket.io": "#010101",
    PostgreSQL: "#336791",
    Bootstrap: "#7952B3",
    "Weather API": "#00C9FF",
    "Chart.js": "#FF6384",
    "D3.js": "#F9A03C",
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
         <div className="text-center mb-5">
  <h2 className="display-5 fw-bold mb-2" style={{ color: "#2d3748" }}>
    <span>Featured </span>
    <span
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Projects
    </span>
  </h2>

  <div
    style={{
      height: "4px",
      width: "120px",
      background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "8px",
      margin: "0 auto",
    }}
  ></div>
</div>

          <p className="lead" style={{ color: "#4a5568" }}>
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={project.title} className="col-lg-4 col-md-6">
              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  transition: `all 0.3s ease ${index * 0.2}s`,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  opacity: isVisible ? 1 : 0,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 20px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    borderRadius: "20px 20px 0 0",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body p-4">
                  <h5
                    className="card-title fw-bold mb-3"
                    style={{ color: "#2d3748" }}
                  >
                    {project.title}
                  </h5>
                  <p className="card-text mb-3" style={{ color: "#4a5568" }}>
                    {project.description}
                  </p>
                  <div className="mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="badge me-2 mb-1 px-2 py-1"
                        style={{
                          background: techColors[tech] || "#764ba2",
                          color: "white",
                          fontSize: "0.8rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm flex-fill"
                      style={{
                        borderRadius: "25px",
                        textDecoration: "none",
                      }}
                    >
                      <Github size={16} className="me-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm flex-fill"
                      style={{
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        border: "none",
                        color: "white",
                        borderRadius: "25px",
                        textDecoration: "none",
                      }}
                    >
                      <ExternalLink size={16} className="me-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
