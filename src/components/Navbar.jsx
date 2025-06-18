import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  Home,
  User,
  Code,
  FolderKanban,
  Mail,
} from 'lucide-react';

export default function Navbar({ activeSection }) {
  const navItems = [
    { id: "home", label: "Home", icon: <Home size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "skills", label: "Skills", icon: <Code size={18} /> },
    { id: "projects", label: "Projects", icon: <FolderKanban size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm"
      style={{
        background: "rgba(59, 59, 59, 0.11)",
        backdropFilter: "blur(14px)",
        borderBottom: "5px solid rgb(255, 140, 0)",
        zIndex: 1000,
        overflow:"hidden"
        
      }}
    >
      <div className="container">
 {/* Brand */}
        <a
          className="navbar-brand fw-bold d-flex align-items-center gap-2 text-white"
          href="#home"
          style={{ fontSize: "1.6rem" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #ae00ff, #ff8c00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.8rem",
              fontWeight: "800",
              letterSpacing: "-1px",
            }}
          >
            &lt;/&gt;
          </span>
          <span className='text-dark' style={{ fontWeight: "600", fontSize: "1.3rem" }}>
            Santhosh<span style={{ color: "#ff8c00" }}>.dev</span>
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2" 
          >
            {navItems.map((item) => (
              <li className="nav-item" key={item.id} style={{  overflow:"hidden"}}>
             <a
  className={`nav-link d-flex align-items-center gap-2 px-3 py-2 rounded ${
    activeSection === item.id ? "active" : ""
  }`}
  href={`#${item.id}`}
  style={{
    backgroundColor: activeSection === item.id
      ? "rgba(255, 255, 255, 0.15)"
      : "transparent",
    color: activeSection === item.id
      ? "rgba(255, 132, 0, 0.85)"
      : "#111",
    fontWeight: 500, // consistent font weight
    transition: "background-color 0.3s ease, color 0.3s ease",
    minWidth: "120px", // ensures width stability
    textAlign: "center",
    whiteSpace: "nowrap",
  }}
>
  {item.icon}
  <span>{item.label}</span>
</a>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
