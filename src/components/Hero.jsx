import HeroImg from "../assets/images/hero.jpg";
import HeroImgHover from "../assets/images/hero2.jpg";


export default function Hero({ isVisible }) {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center bg-light"
    style={{overflow:"hidden"}}>
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT: Text Content */}
          <div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
            <div
              style={{
                transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 1s ease-out",
              }}
            >
              <h1 className="display-4 fw-bold mb-3" style={{ color: "#1a202c" }}>
                Hello, I'm{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Santhosh
                </span>
              </h1>
              <h2 className="h4 mb-3" style={{ color: "#4a5568" }}>
                Full Stack Web Developer
              </h2>
              <p className="mb-4" style={{ color: "#6c757d", maxWidth: "500px" }}>
                I build performant and user-friendly web apps with a focus on clean code, responsive UI, and real-world impact.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a
                  href="#projects"
                  className="btn btn-lg px-4 py-2"
                  style={{
                    background: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
                    border: "none",
                    color: "white",
                    borderRadius: "50px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(255, 215, 0, 0.4)",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 20px rgba(255, 215, 0, 0.6)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.4)";
                  }}
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-secondary btn-lg px-4 py-2"
                  style={{
                    borderRadius: "50px",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
                  onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Profile Image with flip effect */}
          <div className="col-md-6 text-center">
            <div
              style={{
                perspective: "1000px",
                transform: isVisible ? "translateX(0)" : "translateX(50px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 1s ease-out",
              }}
            >
              <div
                className="flip-card-inner"
                style={{
                  width: "300px",
                  height: "300px",
                  margin: "0 auto",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotateY(180deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateY(0deg)";
                }}
              >
                {/* Front Image */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={HeroImg}
                    alt="Santhosh"
                    className="img-fluid rounded-circle shadow"
                    style={{ width: "100%", height: "100%", objectFit: "cover", border: "6px solid #fff" }}
                  />
                </div>

                {/* Back Image */}
               <div
  style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    transform: "rotateY(180deg)",
    backfaceVisibility: "hidden",
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    textAlign: "center", 
    padding: "20px",
    border: "6px solid #fff",
    borderRadius: "50%", 
    backgroundColor: "#f8f9fa", 
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  }}
  className="img-fluid rounded-circle shadow"
>
  From backend logic to frontend magic — I turn ideas into interactive realities.
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}