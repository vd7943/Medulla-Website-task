import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 100);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>

      {isMoving && (
        <div
          className="fixed top-0 left-0 w-3 h-3 bg-[#62c8df] rounded-full pointer-events-none transition-transform duration-70 ease-in-out"
          style={{
            transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
          }}
        ></div>
      )}
    </>
  );
};

export default CustomCursor;
