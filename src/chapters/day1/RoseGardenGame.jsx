import React,{ useState } from "react";
import { motion } from "framer-motion";

export default function RoseGardenGame({ onWin }) {
  const [score, setScore] = useState(0);

  const pickRose = () => {
    if (score >= 100) return;

    const newScore = score + 10;
    setScore(newScore);

    if (newScore >= 100) {
      setTimeout(() => onWin(), 800);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-5xl love-title text-[#6d1f2a]">
        Rose Garden 🌹
      </h2>

      <p className="mt-3 love-body text-gray-600">
        Pick roses from the garden to unlock the letter 💌
      </p>

      {/* Meter */}
      <div className="mt-6 w-full bg-white rounded-full h-4 overflow-hidden shadow">
        <motion.div
          className="h-4 bg-[#6d1f2a]"
          animate={{ width: `${score}%` }}
        />
      </div>

      {/* Garden Grid */}
      <div className="mt-10 grid grid-cols-4 gap-4 justify-center">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.8 }}
            onClick={pickRose}
            className="text-4xl"
          >
            🌹
          </motion.button>
        ))}
      </div>

      <p className="mt-6 love-body text-sm text-gray-500">
        Love Meter: {score}%
      </p>
    </div>
  );
}
