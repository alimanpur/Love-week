import React from "react";
import { motion } from "framer-motion";

export default function MoonDrift() {
  return (
    <motion.div
      className="absolute top-[12%] left-[8%] w-40 h-40"
      animate={{
        x: [0, 40, 0],
        y: [0, 25, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* 🌙 Moon Glow */}
      <div className="absolute inset-0 rounded-full bg-yellow-100/10 blur-3xl" />

      {/* 🌕 Moon Core */}
      <div className="absolute inset-6 rounded-full bg-yellow-100/20 blur-xl" />

      {/* ✨ Soft Highlight */}
      <div className="absolute top-8 left-10 w-6 h-6 rounded-full bg-white/20 blur-md" />
    </motion.div>
  );
}
