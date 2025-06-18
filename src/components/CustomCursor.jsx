import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;

    // Smooth lag animation
    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (cursor) {
        cursor.style.left = `${currentX}px`;
        cursor.style.top = `${currentY}px`;
      }

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    // Click pulse animation
    const handleClick = () => {
      if (cursor) {
        cursor.style.animation = "pulse 0.4s ease-out";
        setTimeout(() => {
          cursor.style.animation = "";
        }, 400);
      }
    };

    window.addEventListener("click", handleClick);

    // Hover effect on links & buttons
    const targets = document.querySelectorAll("a, button, .hover-target");

    targets.forEach((el) =>
      el.addEventListener("mouseenter", () => {
        if (cursor) {
          cursor.style.transform =
            "translate(-50%, -50%) scale(2)";
        }
      })
    );

    targets.forEach((el) =>
      el.addEventListener("mouseleave", () => {
        if (cursor) {
          cursor.style.transform =
            "translate(-50%, -50%) scale(1)";
        }
      })
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "30px",
          height: "30px",
          backgroundColor: "rgba(255, 0, 100, 0.5)",
          border: "2px solid #ff007f",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.2s ease-out",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      ></div>

      {/* Inline keyframes for pulse animation */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
}
