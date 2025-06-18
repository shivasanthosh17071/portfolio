"use client"
import { Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Contact({ isVisible }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    const encodedMessage = encodeURIComponent(
      `👋 Hello, my name is ${name}.\n📧 Email: ${email}\n💬 Message: ${message}`
    )
    const whatsappURL = `https://wa.me/919182868227?text=${encodedMessage}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <section id="contact" className="py-5 bg-light" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
             <div className="text-center mb-5">
  <h2 className="display-5 fw-bold mb-2" style={{ color: "#2d3748" }}>
    Get In Touch
  </h2>

  <div
    style={{
      height: "4px",
      width: "110px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "8px",
      margin: "0 auto",
    }}
  ></div>
</div>

              <p className="lead" style={{ color: "#4a5568" }}>
                Have a project in mind? Let's bring it to life!
              </p>
            </div>

            <div
              className="card border-0 shadow"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 0.8s ease-out",
              }}
            >
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold" style={{ color: "#2d3748" }}>
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        required
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          border: "1px solid rgba(0, 0, 0, 0.2)",
                          borderRadius: "10px",
                          color: "#2d3748",
                        }}
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold" style={{ color: "#2d3748" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        required
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          border: "1px solid rgba(0, 0, 0, 0.2)",
                          borderRadius: "10px",
                          color: "#2d3748",
                        }}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold" style={{ color: "#2d3748" }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="form-control form-control-lg"
                        rows="5"
                        onChange={handleChange}
                        required
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          border: "1px solid rgba(0, 0, 0, 0.2)",
                          borderRadius: "10px",
                          color: "#2d3748",
                          resize: "vertical",
                        }}
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-lg px-5 py-3"
                        style={{
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          border: "none",
                          color: "white",
                          borderRadius: "50px",
                          transition: "all 0.3s ease",
                          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                        }}
                      >
                        Send via WhatsApp
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

           
<div className="text-center mt-5">
  <h4 className="mb-4 fw-bold" style={{ color: "#2d3748" }}>
    Connect With Me
  </h4>
  <div className="row justify-content-center g-4">
    {/* GitHub */}
    <div className="col-10 col-sm-6 col-md-4">
      <div
        className="card h-100 border-0 shadow"
        style={{
          borderRadius: "20px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)"
          e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.2)"
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <div className="card-body text-center">
          <Github size={40} strokeWidth={1.5} style={{ color: "#333" }} />
          <h5 className="mt-3 fw-semibold">GitHub</h5>
          <a href="https://github.com/shivasanthosh17071" target="_blank" className="stretched-link text-decoration-none" />
        </div>
      </div>
    </div>

    {/* LinkedIn */}
    <div className="col-10 col-sm-6 col-md-4">
      <div
        className="card h-100 border-0 shadow"
        style={{
          borderRadius: "20px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)"
          e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.2)"
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <div className="card-body text-center">
          <Linkedin size={40} strokeWidth={1.5} style={{ color: "#0077b5" }} />
          <h5 className="mt-3 fw-semibold">LinkedIn</h5>
          <a href="https://www.linkedin.com/in/shiva-santhosh-reddy-devarapally-352319293/" target="_blank" className="stretched-link text-decoration-none" />
        </div>
      </div>
    </div>

    {/* Email */}
<div className="col-10 col-sm-6 col-md-4">
  <div
    className="card h-100 border-0 shadow"
    style={{
      borderRadius: "20px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(10px)",
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-10px)";
      e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.2)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    }}
  >
    <a
      href="mailto:shivasanthosh1707@gmail.com"
      className="stretched-link text-decoration-none"
      style={{ zIndex: 1 }}
    ></a>
    <div className="card-body text-center position-relative">
      <Mail size={40} strokeWidth={1.5} style={{ color: "#dc3545" }} />
      <h5 className="mt-3 fw-semibold">Email</h5>
    </div>
  </div>
</div>

  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
