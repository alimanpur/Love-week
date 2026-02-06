import { motion } from "framer-motion";
import React from "react";

export default function GoldenUnlock({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center relative"
    >
      {/* Glow Background */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-linear-to-b from-yellow-100/40 to-transparent blur-2xl"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      <div className="relative z-10">
        <h2 className="text-5xl love-title text-[#6d1f2a]">
          Secret Rose Appeared ✨
        </h2>

        <p className="mt-4 love-body text-gray-700 leading-relaxed">
          Only true love unlocks this…
          <br />
          Tap the Golden Rose to continue 💛
        </p>

        {/* Golden Rose */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          onClick={onNext}
          className="mt-10 text-8xl"
        >
          🌹✨
        </motion.button>

        <p className="mt-6 text-sm text-gray-500">
          A magical letter awaits…
        </p>
      </div>
    </motion.div>
  );
}
