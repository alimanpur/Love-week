import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import bouquet1 from "../assets/bouquets/bouquet-crimson.jpg";
import bouquet2 from "../assets/bouquets/bouquet-golden.jpg";
import bouquet3 from "../assets/bouquets/bouquet-blush.jpg";
import bouquet4 from "../assets/bouquets/bouquet-ivory.jpg";
import bouquet5 from "../assets/bouquets/bouquet-mixed.jpg";

export default function RandomBouquet() {
  const bouquets = [bouquet1, bouquet2, bouquet3, bouquet4, bouquet5];

  const [current, setCurrent] = useState(
    bouquets[Math.floor(Math.random() * bouquets.length)]
  );

  const shuffleBouquet = () => {
    let next;
    do {
      next = bouquets[Math.floor(Math.random() * bouquets.length)];
    } while (next === current);

    setCurrent(next);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Bouquet Image Animation */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={current}
          alt="Bouquet"
          className="w-65 drop-shadow-2xl rounded-2xl"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>

      {/* Try Again Button */}
      <button
        onClick={shuffleBouquet}
        className="mt-5 px-6 py-2 rounded-full border border-[#6d1f2a] text-[#6d1f2a] love-body text-sm shadow-sm hover:bg-[#6d1f2a] hover:text-white transition"
      >
        🎲 Try Another Bouquet
      </button>
    </div>
  );
}
