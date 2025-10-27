import HeroImg from "../assets/images/hero2.jpg";

export default function About({ isVisible }) {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#f7f9fc" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
       

          {/* Text Column */}
          <div className="col-lg-6">
            <div
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(-40px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 0.8s ease-out",
              }}
            >
            <div className="text-center mb-5">
  <h2
    className="fw-bold mb-2"
    style={{
      fontSize: "2.5rem",
      color: "#2d3748",
    }}
  >
    👋 About Me
  </h2>

  <div
    style={{
      height: "4px",
      width: "130px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "8px",
      margin: "0 auto",
    }}
  ></div>
</div>

              <p className="lead mb-3" style={{ color: "#4a5568" }}>
                I'm a passionate <strong>Full Stack Web Developer</strong> with 1 years of experience building responsive web apps that solve real problems and deliver elegant user experiences.
              </p>
              <p style={{ color: "#718096" }}>
                Outside of coding, I love experimenting with new tech, contributing to open-source projects, and sketching ideas with a coffee in hand. Clean, maintainable code and design that connects — that's my thing.
              </p>

              {/* Badges */}
              <div className="mt-4 d-flex flex-wrap gap-2">
                {[
                  { label: "Problem Solver", gradient: "#667eea, #764ba2" },
                  { label: "Creative Thinker", gradient: "#f093fb, #f5576c" },
                  { label: "Team Player", gradient: "#4facfe, #00f2fe" },
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="badge px-3 py-2"
                    style={{
                      background: `linear-gradient(135deg, ${tag.gradient})`,
                      color: "white",
                      fontSize: "0.9rem",
                      borderRadius: "50px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          
             <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              className="text-center"
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 0.8s ease-out",
              }}
            >
              <img
                src={HeroImg}
                alt="Santhosh.dev"
                className=" shadow-lg mt-4"
                style={{
                  borderTop: "5px solid rgb(0, 238, 255)",
                  borderRadius: "00px 00px 100px 100px",
                  maxWidth: "50%",
                  borderLeft: "6px solid rgba(255,255,255,0.5)",
                   borderBottom: "6px solid rgba(255,255,255,0.5)",
                    borderRight: "6px solid rgba(255,255,255,0.5)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.04)";
                  e.target.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.25)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
