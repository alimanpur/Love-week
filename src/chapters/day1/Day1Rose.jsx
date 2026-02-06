import React,{ useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LetterUnlock from "./LetterUnlock.jsx";
import PetalGame from "./PetalGame.jsx";
import BouquetPreview from "./BouquetPreview.jsx";
import LoveBackground from "../../components/LoveBackground.jsx";
import GoldenUnlock from "./GoldenUnlock.jsx";
import FinalLetter from "./FinalLetter";

import { unlockNextDay } from "../../utils/unlock.js";



const moods = [
  { label: "Soft 🌸", value: "soft" },
  { label: "Passion ❤️", value: "passion" },
  { label: "Forever ✨", value: "forever" },
  { label: "Calm 🤍", value: "calm" },
];

const roseTypes = [
  {
    name: "Crimson Rose",
    emoji: "🌹",
    id: 1,
    color: "#6d1f2a", // Burgundy
  },
  {
    name: "Blush Rose",
    emoji: "🌸",
    id: 2,
    color: "#e8a1b0", // Soft pink
  },
  {
    name: "Ivory Rose",
    emoji: "🤍",
    id: 3,
    color: "#f5e9dc", // Cream
  },
  {
    name: "Golden Rose",
    emoji: "✨🌹",
    id: 4,
    color: "#d4af37", // Gold
  },
];


export default function Day1Rose({ onFinish }) {
  const [step, setStep] = useState(0);

  const [mood, setMood] = useState(null);
  const [selectedRoses, setSelectedRoses] = useState([]);
  const [bouquetSize, setBouquetSize] = useState(3);

  const next = () => setStep(step + 1);

  // Add rose to bouquet
 const toggleRose = (rose) => {
  const exists = selectedRoses.find((r) => r.name === rose.name);

  if (exists) {
    setSelectedRoses(selectedRoses.filter((r) => r.name !== rose.name));
  } else {
    setSelectedRoses([...selectedRoses, rose]);
  }
};


  return (
    <div className="relative">
      <LoveBackground />
      <div className="relative z-10">
      <p className="text-xs text-gray-400">Current Step: {step}</p>

      {/* Step Transition Wrapper */}
      <AnimatePresence mode="wait">
        {/* STEP 0 — Mood */}
        {step === 0 && (
          <motion.div
            key="mood"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-5xl love-title text-[#6d1f2a]">
              Rose Day 🌹
            </h2>

            <p className="mt-3 love-body text-gray-600">
              Choose the mood of love today
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {moods.map((m) => (
                <button
                  key={m.value}
                  onClick={() => {
                    setMood(m.value);
                    next();
                  }}
                  className="rounded-2xl bg-white shadow-md py-4 love-body text-[#6d1f2a]"
                >
                  {m.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* STEP 1 — Select Roses */}
        {step === 1 && (
          <motion.div
            key="roses"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl love-title text-[#6d1f2a]">
              Pick Your Roses
            </h2>

            <p className="mt-2 love-body text-gray-600">
              Tap roses to add them to your bouquet 💐
            </p>

            {/* Rose Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {roseTypes.slice(0, 3).map((rose) => (
                <button
                  key={rose.id}
                  onClick={() => toggleRose(rose)}
                  className={`rounded-3xl p-5 shadow-md transition ${
                    selectedRoses.includes(rose.name)
                      ? "bg-[#6d1f2a] text-white scale-105"
                      : "bg-white text-[#6d1f2a]"
                  }`}
                >
                  <div className="text-3xl">{rose.emoji}</div>
                  <p className="mt-2 love-body text-sm">{rose.name}</p>
                </button>
              ))}
            </div>

            {/* Bouquet Size */}
            <div className="mt-6">
              <p className="love-body text-gray-700">
                Bouquet Size: {bouquetSize} roses
              </p>

              <input
                type="range"
                min="1"
                max="12"
                value={bouquetSize}
                onChange={(e) => setBouquetSize(e.target.value)}
                className="w-full mt-3"
              />
            </div>

            <button
              disabled={selectedRoses.length === 0}
              onClick={() => setStep(2)}
              className="mt-6 w-full py-3 rounded-full bg-[#6d1f2a] text-white shadow-lg disabled:opacity-40"
            >
              Continue 🌹
            </button>
          </motion.div>
        )}
{step === 2 && (
  <BouquetPreview
    bouquetSize={bouquetSize}
    onNext={() => setStep(3)}
  />
)}

        {/* STEP 2 — Golden Rose Unlock */}
{step === 3 && (
  <GoldenUnlock onNext={() => setStep(4)} />
)}


{/* STEP 3 — Petal Mini Game */}
{step === 4 && (
  <motion.div
    key="petals"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    <PetalGame onWin={() => setStep(5)} />
  </motion.div>
)}

{/* STEP 4 — Letter Unlock Screen */}
{step === 5 && (
  <motion.div
    key="unlock"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    <LetterUnlock onOpen={() => setStep(6)} />
  </motion.div>
)}

{/* STEP 6 — Final Love Letter */}
{step === 6 && (
  <FinalLetter
    bouquetSize={bouquetSize}
    selectedRoses={selectedRoses}
    onFinish={() => {
      alert("Day 1 Completed 💖 Day 2 Unlocking...");
      onFinish(); // unlock next day
    }}
  />
)}



      </AnimatePresence>
      </div>
    </div>
  );
}
