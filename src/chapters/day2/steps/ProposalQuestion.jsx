import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProposalQuestion({ onYes }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowButton(true), 2000);
  }, []);

  return (
    <div className="royal-card text-center p-10 text-white">
      <h4 className="love-title text-4xl royal-title">
        One Question…
      </h4>

      {/* Heartbeat */}
      <motion.div
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="mt-8 text-6xl"
      >
        💓
      </motion.div>

      <p className="royal-text mt-6 leading-relaxed text-xl">
        My heart has waited for this moment…</p>
        <br />
        <h1 className="love-title text-5xl royal-title">Will you be Mine Forever? 💍</h1> 
      

      {/* YES Button */}
      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.95 }}
          onClick={onYes}
          className="royal-button mt-10"
        >
          YES ✨
        </motion.button>
      )}
    </div>
  );
}
