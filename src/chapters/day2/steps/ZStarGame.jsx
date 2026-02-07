import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ZStarGame({ onWin }) {
  const [step, setStep] = useState(0);
  const [wrong, setWrong] = useState(false);

  const stars = [
    { id: 1, x: 20, y: 20 },
    { id: 2, x: 80, y: 20 },
    { id: 3, x: 20, y: 80 },
    { id: 4, x: 80, y: 80 },
  ];

  const correctOrder = [1, 2, 3, 4];

  const handleClick = (id) => {
    if (id === correctOrder[step]) {
      setWrong(false);

      const nextStep = step + 1;
      setStep(nextStep);

      if (nextStep === 4) {
        setTimeout(onWin, 900);
      }
    } else {
      // ❌ Wrong click resets
      setWrong(true);
      setStep(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center"
    >
      <div
        className="w-full max-w-md p-8 rounded-3xl border border-yellow-300/20"
        style={{
          background: "rgba(15, 25, 50, 0.92)",
          boxShadow: "0 0 40px rgba(245,214,123,0.12)",
        }}
      >
        {/* ✅ Title */}
        <h2
          className="text-5xl text-center"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            color: "#f5d67b",
            textShadow: "0px 0px 18px rgba(245,214,123,0.4)",
          }}
        >
          Z Constellation ✨
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-center text-white/80 text-sm">
          Tap the stars in the correct order to form{" "}
          <span className="text-yellow-200 font-semibold">Z</span>
        </p>

        {/* Star Box */}
        <div className="relative w-72 h-72 mx-auto mt-8 rounded-2xl border border-white/15 bg-black/30 overflow-hidden">
          {/* Lines */}
          {step >= 2 && <Line x1={20} y1={20} x2={80} y2={20} />}
          {step >= 3 && <Line x1={80} y1={20} x2={20} y2={80} />}
          {step >= 4 && <Line x1={20} y1={80} x2={80} y2={80} />}

          {/* Stars */}
          {stars.map((star) => (
            <motion.button
              key={star.id}
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.15 }}
              onClick={() => handleClick(star.id)}
              className="absolute text-4xl drop-shadow-xl"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {step >= star.id ? "🌟" : "⭐"}
            </motion.button>
          ))}
        </div>

        {/* Progress */}
        <p className="mt-5 text-center text-sm text-white/60">
          Progress: {step}/4
        </p>

        {/* Wrong Message */}
        {wrong && (
          <p className="text-center mt-2 text-sm text-red-300">
            Wrong star ✨ The constellation resets…
          </p>
        )}

        {/* Win Message */}
        {step === 4 && (
          <p className="text-center mt-3 text-yellow-200 text-sm">
            Perfect constellation unlocked 🌙
          </p>
        )}
      </div>
    </motion.div>
  );
}

/* Line Component */
function Line({ x1, y1, x2, y2 }) {
  return (
    <svg className="absolute inset-0 w-full h-full">
      <line
        x1={`${x1}%`}
        y1={`${y1}%`}
        x2={`${x2}%`}
        y2={`${y2}%`}
        stroke="#f5d67b"
        strokeWidth="3"
        opacity="0.85"
      />
    </svg>
  );
}
