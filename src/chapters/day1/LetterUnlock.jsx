import React from "react";
import { motion } from "framer-motion";

export default function LetterUnlock({ onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      {/* Icon */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="text-7xl"
      >
        💌
      </motion.div>

      {/* Title */}
      <h2 className="mt-6 text-5xl love-title text-[#6d1f2a]">
        Secret Letter Unlocked
      </h2>

      {/* Subtitle */}
      <p className="mt-4 love-body text-gray-600 leading-relaxed">
        Your love has filled the meter…  
        A message written from the heart is waiting for you.
      </p>

      {/* Action */}
      <button
        onClick={onOpen}
        className="mt-8 px-8 py-3 rounded-full bg-[#6d1f2a] text-white shadow-lg active:scale-95 transition"
      >
        Open the Letter 💖
      </button>
    </motion.div>
  );
}
