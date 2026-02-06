import React from "react";
import { motion } from "framer-motion";

export default function FinalLetter({ bouquetSize, selectedRoses, onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="w-full flex justify-center"
    >
      {/* Letter Card */}
      <div className="w-full max-w-105 bg-white/80 backdrop-blur-xl 
      rounded-[28px] shadow-2xl p-6 border border-[#f3e6e8] relative overflow-hidden">

        {/* Floating Hearts Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-6 left-6 text-3xl">💗</div>
          <div className="absolute top-16 right-8 text-2xl">🌹</div>
          <div className="absolute bottom-10 left-10 text-2xl">✨</div>
          <div className="absolute bottom-6 right-6 text-3xl">💞</div>
        </div>

        {/* Title */}
        <h2 className="love-title text-center text-5xl text-[#6d1f2a]">
          From My Heart
        </h2>

        <p className="love-body text-center text-gray-600 mt-2 text-sm">
          The final note… made just for you 💌
        </p>

        {/* Paper Letter */}
        <motion.div
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-[#fffaf5] border border-[#f0d9dd]
          rounded-2xl p-6 shadow-inner"
        >
          {/* Greeting */}
          <p className="love-body text-[#6d1f2a] text-lg mb-4">
            My Dearest,
          </p>

          {/* Main Letter */}
          <p className="love-body text-gray-700 leading-relaxed text-[15px]">
            Just like a rose, your love fills my world with warmth,
            fragrance, and color.
            <br />
            <br />
            Today, I wanted you to feel something simple but true:
            <br />
            <span className="font-semibold text-[#6d1f2a]">
              you are my most precious treasure.
            </span>
            <br />
            <br />
            You chose{" "}
            <span className="font-semibold">
              {bouquetSize} roses
            </span>{" "}
            today, and each one carries a piece of my feelings for you.
            <br />
            <br />
            I promise to keep our love blooming forever…
          </p>

          {/* Closing */}
          <p className="love-body text-[#6d1f2a] text-lg mt-6">
            Always Yours, ❤️
          </p>
        </motion.div>

        {/* Button */}
        <button
          onClick={onFinish}
          className="mt-8 w-full py-3 rounded-full 
          bg-[#6d1f2a] text-white love-body text-lg shadow-lg 
          hover:scale-[1.02] active:scale-[0.98] transition"
        >
          One Final Note ✨
        </button>

        {/* Download + Share Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            className="w-1/2 py-2 rounded-full border border-[#6d1f2a]
            text-[#6d1f2a] love-body text-sm hover:bg-[#6d1f2a] hover:text-white transition"
          >
            📥 Download
          </button>

          <button
            className="w-1/2 py-2 rounded-full border border-[#6d1f2a]
            text-[#6d1f2a] love-body text-sm hover:bg-[#6d1f2a] hover:text-white transition"
          >
            🔗 Share
          </button>
        </div>
      </div>
    </motion.div>
  );
}
