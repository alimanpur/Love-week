import React,{ useState } from "react";
import { motion } from "framer-motion";

export default function PetalGame({ onWin }) {
  const [score, setScore] = useState(0);

  const tapPetal = () => {
    const newScore = score + 10;
    setScore(newScore);

    if (newScore >= 100) {
      setTimeout(() => onWin(), 600);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-5xl love-title text-[#6d1f2a]">
        Collect Petals 🌸
      </h2>

      <p className="mt-3 love-body text-gray-600 text-sm leading-relaxed">
        Tap petals to fill the Love Meter 💖  
        When it reaches 100%, a secret letter unlocks…
      </p>

      {/* Love Meter */}
      <div className="mt-6 w-full bg-white rounded-full h-4 overflow-hidden shadow">
        <motion.div
          className="h-4 bg-[#6d1f2a]"
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Tap Petal */}
      <motion.button
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.1 }}
        onClick={tapPetal}
        className="mt-10 text-7xl"
      >
        🌸
      </motion.button>

      <p className="mt-4 love-body text-gray-500 text-sm">
        Love Meter: {score}%
      </p>
    </div>
  );
}
