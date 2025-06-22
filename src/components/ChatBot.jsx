import { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react"; // optional: replace with Bootstrap Icon if preferred

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botReply = { sender: "bot", text: generateBotReply(input) };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  const generateBotReply = (text) => {
    const lowercase = text.toLowerCase();
    if (lowercase.includes("projects")) return "You can check out my projects in the Projects section!";
    if (lowercase.includes("skills")) return "I'm skilled in React, Node.js, MongoDB, and more.";
    if (lowercase.includes("contact")) return "You can contact me via the Contact section.";
    return "I'm still learning! 😊 Please check the navigation menu for more.";
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="btn btn-primary rounded-circle shadow"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          zIndex: 10001,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* ChatBot Box */}
      {isOpen && (
        <div
          className="card shadow"
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            zIndex: 10000,
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <div className="card-header bg-primary text-white text-center fw-bold py-2">
            💬 ChatBot
          </div>
          <div
            className="card-body"
            style={{
              height: "250px",
              overflowY: "auto",
              background: "#f8f9fa",
              fontSize: "0.9rem",
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 d-flex ${
                  msg.sender === "user" ? "justify-content-end" : "justify-content-start"
                }`}
              >
                <div
                  className={`p-2 rounded ${
                    msg.sender === "user" ? "bg-primary text-white" : "bg-light"
                  }`}
                  style={{ maxWidth: "80%" }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef}></div>
          </div>
          <div className="card-footer p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button className="btn btn-primary" onClick={handleSend}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
