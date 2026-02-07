import React from "react";
import { motion } from "framer-motion";

export default function ProposalIntro({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="royal-card text-center p-10 text-white relative overflow-hidden"
    >
      {/* Floating Sparkles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-yellow-300 opacity-50"
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          ✦
        </motion.span>
      ))}

      {/* Title */}
      <h1 className="love-title text-5xl royal-title tracking-wide">
        Propose Day
      </h1>

      {/* Ring */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-6xl mt-6"
      >
        💍
      </motion.div>

      {/* Subtitle */}
      <p className="royal-text mt-6 leading-relaxed">
        Tonight feels different…
        <br />
        Like the universe paused,
        <br />
        waiting for one royal question.
      </p>

      {/* Continue */}
      <button onClick={onNext} className="royal-button mt-10">
        Continue ✨
      </button>

      <p className="mt-6 text-xs text-gray-400 italic">
        A royal midnight memory is about to begin…
      </p>
    </motion.div>
  );
}
