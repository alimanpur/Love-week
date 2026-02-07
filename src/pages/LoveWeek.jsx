import React, { useState, useEffect } from "react";

/* Days */
import Day1Rose from "../chapters/day1/Day1Rose";
import Day2Propose from "../chapters/day2/Day2Propose";

/* Backgrounds */
import Day1Background from "../components/backgrounds/Day1Background";
import Day2Background from "../components/backgrounds/Day2Background";

/* Layout */
import LoveLayout from "../components/LoveLayout";

/* Music */
import MusicToggle from "../components/MusicToggle";

/* Release Control */
import { ACTIVE_DAY } from "../data/release";

export default function LoveWeek() {
  const [currentDay, setCurrentDay] = useState(1);

  /* ✅ Allow switching only up to ACTIVE_DAY */
  const handleDayClick = (day) => {
    if (day <= ACTIVE_DAY) {
      setCurrentDay(day);
    }
  };

  /* ✅ FORCE FULL WEBSITE THEME CHANGE */
  useEffect(() => {
    if (currentDay === 2) {
      // 🌌 Royal Midnight Theme
      document.body.style.backgroundColor = "#050914";
    } else {
      // 🌸 Rose Day Theme
      document.body.style.backgroundColor = "#fff7f3";
    }

    // Cleanup reset (important)
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [currentDay]);

  return (
    <>
      {/* ✅ Background Switch (Key Forces Remount) */}
      <div key={currentDay}>
        {currentDay === 1 && <Day1Background />}
        {currentDay === 2 && <Day2Background />}
      </div>

      {/* ✅ Music Button Dynamic */}
      <MusicToggle currentDay={currentDay} />

      <LoveLayout>
        {/* ✅ Timeline Pills */}
        <div className="flex gap-3 justify-center flex-wrap mb-8">
          {/* Day 1 */}
          <button
            onClick={() => handleDayClick(1)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                currentDay === 1
                  ? "bg-[#6b1d2a] text-white"
                  : "bg-white border border-gray-300 text-gray-700"
              }`}
          >
            Day 1
          </button>

          {/* Day 2 */}
          {ACTIVE_DAY >= 2 ? (
            <button
              onClick={() => handleDayClick(2)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  currentDay === 2
                    ? "bg-yellow-300 text-black"
                    : "bg-white border border-gray-300 text-gray-700"
                }`}
            >
              Day 2
            </button>
          ) : (
            <ComingSoonButton />
          )}

          {/* Future Days */}
          <ComingSoonButton />
          <ComingSoonButton />
          <ComingSoonButton />
          <ComingSoonButton />
          <ComingSoonButton />
        </div>

        {/* ✅ Main Content Wrapper */}
        <div className="w-full flex justify-center">
          <div
            className={`
              w-full max-w-107.5
              rounded-3xl p-6 transition-all duration-500

              ${
                currentDay === 1
                  ? "bg-white shadow-xl"
                  : "bg-white/5 backdrop-blur-xl border border-yellow-200/10 shadow-2xl"
              }
            `}
          >
            {/* ✅ Day 1 */}
            {currentDay === 1 && ACTIVE_DAY >= 1 && <Day1Rose />}

            {/* ✅ Day 2 */}
            {currentDay === 2 && ACTIVE_DAY >= 2 && <Day2Propose />}

            {/* ✅ Locked Message */}
            {currentDay > ACTIVE_DAY && (
              <div className="text-center py-20">
                <h2 className="love-title text-4xl text-gray-400">
                  Coming Soon ✨
                </h2>
                <p className="love-body text-gray-500 mt-2">
                  The next chapter unlocks soon…
                </p>
              </div>
            )}
          </div>
        </div>
      </LoveLayout>
    </>
  );
}

/* Coming Soon Pill */
function ComingSoonButton() {
  return (
    <button
      disabled
      className="px-5 py-2 rounded-full text-sm bg-gray-100 text-gray-400 cursor-not-allowed"
    >
      Coming Soon
    </button>
  );
}
