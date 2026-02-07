import React from "react";
import { motion } from "framer-motion";

export default function IntroNight({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center p-10 rounded-3xl bg-linear-to-b
      from-[#0b1120] to-[#1e293b] text-white shadow-2xl"
    >
      <h1 className="love-title text-5xl">Propose Day 💍</h1>

      <p className="love-body mt-5 text-gray-200 leading-relaxed">
        Tonight feels different…  
        A question has been waiting in my heart.
      </p>

      <button
        onClick={onNext}
        className="mt-10 px-8 py-3 rounded-full bg-white text-black shadow-lg"
      >
        Continue 🌙
      </button>
    </motion.div>
  );
}
