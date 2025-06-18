"use client";

export default function Skills({ isVisible }) {
  const skills = [
    { name: "ReactJS", icon: "⚛️", color: "#61DAFB" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "Express.js", icon: "🚀", color: "#000000" },
    { name: "HTML5", icon: "🌐", color: "#E34F26" },
    { name: "CSS3", icon: "🎨", color: "#1572B6" },
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
    { name: "SQL", icon: "🗄️", color: "#336791" },
    { name: "Git/GitHub", icon: "📚", color: "#F05032" },
    { name: "Figma", icon: "🎯", color: "#F24E1E" },
    { name: "Photoshop", icon: "🖼️", color: "#31A8FF" },
    { name: "Bootstrap", icon: "💠", color: "#7952B3" },
    { name: "Tailwind CSS", icon: "🌬️", color: "#38B2AC" },
    { name: "AI Prompting", icon: "🧠", color: "#FF6B6B" },
  ];

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        {/* Title */}
        <div
          className="text-center mb-5"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1s ease-out",
          }}
        >
         <div className="text-center mb-4">
  <h2 className="display-5 fw-bold mb-2" style={{ color: "#1a202c" }}>
    <span>Skills </span>
    <span
      style={{
        background: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      & Technologies
    </span>
  </h2>

  <div
    style={{
      height: "4px",
      width: "120px",
      margin: "0 auto",
      background: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
      borderRadius: "8px",
    }}
  ></div>
</div>

          <p className="lead" style={{ color: "#4a5568" }}>
            Here are the technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="col-lg-3 col-md-4 col-sm-6">
              <div
                className="card h-100 text-center border-0 shadow"
                style={{
                  background: "white",
                  borderRadius: "20px",
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease ${index * 0.1}s`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 12px 25px rgba(0, 0, 0, 0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
                }}
              >
                <div className="card-body py-4">
                  <div
                    className="mb-3"
                    style={{
                      fontSize: "2.5rem",
                      filter: `drop-shadow(0 0 5px ${skill.color})`,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <h5 className="fw-bold" style={{ color: "#2d3748" }}>
                    {skill.name}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
