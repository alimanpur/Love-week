import React from "react";
import { motion } from "framer-motion";

export default function RingBox({ onNext }) {
  return (
    <div className="text-center p-10 rounded-3xl bg-[#0f172a] text-white">
      <h2 className="love-title text-4xl">A Gift For You 🎁</h2>

      <p className="love-body mt-4 text-gray-300">
        Tap the box to open…
      </p>

      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className="mt-10 text-8xl cursor-pointer"
      >
        💍
      </motion.div>

      <p className="mt-6 text-sm text-gray-400">
        (The ring is waiting…)
      </p>
    </div>
  );
}
