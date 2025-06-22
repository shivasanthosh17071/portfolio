import React, { useState, useEffect } from "react";
import {
  Clock,
  CheckCircle,
  XCircle,
  Gift,
  PlayCircle,
  RotateCcw,
} from "lucide-react";

const masterQuestions = [
  { level: "Easy", question: "Reverse the string: world", validator: (input) => input.trim() === "dlrow", marks: 5 },
  { level: "Easy", question: "What is the length of the string: 'JavaScript'?", validator: (input) => input.trim() === "10", marks: 5 },
  { level: "Easy", question: "Convert to uppercase: 'hello world'", validator: (input) => input.trim() === "HELLO WORLD", marks: 5 },
  { level: "Easy", question: "Return the first character of: 'ReactJS'", validator: (input) => input.trim() === "R", marks: 5 },
  { level: "Easy", question: "What does 5 + 5 return?", validator: (input) => input.trim() === "10", marks: 5 },
  { level: "Medium", question: "Is 'madam' a palindrome?", validator: (input) => input.trim().toLowerCase() === input.trim().split("").reverse().join("").toLowerCase(), marks: 10 },
  { level: "Medium", question: "What is the output of 2 + '2' in JavaScript?", validator: (input) => input.trim() === "22", marks: 10 },
  { level: "Medium", question: "Return the sum of digits in 123 (1+2+3).", validator: (input) => input.trim() === "6", marks: 10 },
  { level: "Medium", question: "Convert the number 15 to binary.", validator: (input) => input.trim() === "1111", marks: 10 },
  { level: "Medium", question: "Find the largest number: 4, 9, 2", validator: (input) => input.trim() === "9", marks: 10 },
  { level: "Hard", question: "Capitalize each word in: 'this is a test'", validator: (input) => input.trim() === "This Is A Test", marks: 15 },
  { level: "Hard", question: "Return the factorial of 5.", validator: (input) => input.trim() === "120", marks: 15 },
  { level: "Hard", question: "Find the second largest number: 1, 3, 5, 7, 9", validator: (input) => input.trim() === "7", marks: 15 },
  { level: "Hard", question: "Count vowels in 'Coding Challenge'", validator: (input) => input.trim() === "5", marks: 15 },
  { level: "Hard", question: "What is the output of typeof null in JavaScript?", validator: (input) => input.trim().toLowerCase() === "object", marks: 15 },
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function CodingChallengeWidget() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showGift, setShowGift] = useState(false);
  const [started, setStarted] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  useEffect(() => {
    if (started && timeLeft > 0 && !showGift) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showGift) {
      setStatus("timeout");
    }
  }, [timeLeft, showGift, started]);

  const handleStart = () => {
    const shuffled = shuffleArray(masterQuestions).slice(0, 3);
    setQuestions(shuffled);
    setStarted(true);
    setTimeLeft(60);
    setScore(0);
    setCurrent(0);
    setInput("");
    setStatus(null);
    setShowGift(false);
  };

  const handleSubmit = () => {
    const q = questions[current];
    if (q.validator(input)) {
      setScore(score + q.marks);
      setStatus("correct");
    } else {
      setStatus("wrong");
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setInput("");
        setStatus(null);
      } else {
        setShowGift(true);
      }
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey && status === null && timeLeft > 0) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const getSurpriseMessage = () => {
    const maxScore = questions.reduce((t, q) => t + q.marks, 0);
    const percentage = (score / maxScore) * 100;

    if (percentage >= 90) return "🏆 Code Grandmaster!";
    if (percentage >= 70) return "🔥 You're a Code Ninja!";
    if (percentage >= 50) return "💡 Great Effort, Keep Going!";
    return "🚀 You’re Learning Fast! Try Again!";
  };

  const q = questions[current];

  return (
    <div className="bg-light">
      <style>{`
        .btn-animate {
          padding: 0.6rem 1.4rem;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 50px;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
        }
        .btn-animate:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
        }
        .btn-animate:active {
          transform: scale(0.97);
          box-shadow: none;
        }
      `}</style>

      <div
        className="container p-3 p-md-5 mt-4 mb-5 border rounded shadow"
        style={{
          maxWidth: "720px",
          background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
          borderRadius: "1rem",
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {!started ? (
          <div className="text-center p-4">
            <PlayCircle size={50} className="text-primary mb-3" />
            <h3 className="fw-bold fs-4">Ready to Code?</h3>
            <p className="text-muted fs-6">Test your skills with some fun challenges!</p>
            <button className="btn btn-success btn-animate mt-3" onClick={handleStart}>
              🚀 Start Challenge
            </button>
          </div>
        ) : !showGift ? (
          <>
            <h5 className="fw-bold mb-3">
              🎯 Difficulty:{" "}
              <span
                className={`badge ${
                  q.level === "Easy"
                    ? "bg-success"
                    : q.level === "Medium"
                    ? "bg-warning text-dark"
                    : "bg-danger"
                }`}
              >
                {q.level}
              </span>
            </h5>

            <p className="fs-5">{q.question}</p>
            <textarea
              className="form-control mb-3"
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your answer here..."
              onKeyDown={handleKeyPress}
              disabled={status !== null}
            />

            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
              <button
                className="btn btn-primary btn-animate"
                onClick={handleSubmit}
                disabled={status !== null || timeLeft === 0}
              >
                ✅ Submit Answer
              </button>
              <div className="d-flex align-items-center text-danger small fw-semibold">
                <Clock className="me-2" size={18} />
                <span className="bg-white border px-3 py-1 rounded-pill shadow-sm">
                  {timeLeft}s
                </span>
              </div>
            </div>

            {status === "correct" && (
              <div className="alert alert-success d-flex align-items-center">
                <CheckCircle className="me-2" /> Correct! +{q.marks} pts
              </div>
            )}
            {status === "wrong" && (
              <div className="alert alert-danger d-flex align-items-center">
                <XCircle className="me-2" /> Incorrect. No marks.
              </div>
            )}
            {status === "timeout" && (
              <div className="alert alert-warning d-flex align-items-center">
                <XCircle className="me-2" /> Time's up!
              </div>
            )}

            <div className="progress mt-4" style={{ height: "12px", borderRadius: "10px", overflow: "hidden" }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{
                  width: `${((current + (status ? 1 : 0)) / questions.length) * 100}%`,
                  transition: "width 0.5s ease",
                }}
              />
            </div>
            <div className="mt-2 text-end text-muted small">
              Progress: {Math.round(((current + (status ? 1 : 0)) / questions.length) * 100)}%
            </div>
            <div className="mt-3 text-end text-muted">Score: {score} pts</div>
          </>
        ) : (
          <div className="text-center p-4">
            <Gift size={48} className="text-success mb-3" />
            <h3 className="fw-bold fs-4">🎉 Challenge Completed!</h3>
            <p className="fs-5">
              Your Score: {score} / {questions.reduce((t, q) => t + q.marks, 0)}
            </p>
            <div className="alert alert-info mt-4">
              🎁 You've unlocked a surprise:{" "}
              <strong className="text-primary">{getSurpriseMessage()}</strong>
            </div>
            <button
              className="btn btn-outline-primary btn-animate mt-3"
              onClick={handleStart}
            >
              <RotateCcw className="me-2" size={18} />
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
