import React,{ useState } from "react";
import Day1Rose from "../chapters/day1/Day1Rose";
import { getUnlockedDay } from "../utils/unlock";

export default function LoveWeek() {
  const [activeDay, setActiveDay] = useState(1);

  const unlockedDay = getUnlockedDay();

  const days = [
    { id: 1, title: "Rose Day 🌹" },
    { id: 2, title: "Propose Day 💍" },
    { id: 3, title: "Chocolate Day 🍫" },
    { id: 4, title: "Teddy Day 🧸" },
    { id: 5, title: "Promise Day 🤝" },
    { id: 6, title: "Hug Day 🤗" },
    { id: 7, title: "Kiss Day 💋" },
  ];

  return (
    <div className="max-w-md mx-auto px-4 pt-8">
      {/* Title */}
      <h1 className="text-5xl love-title text-center text-[#6d1f2a]">
        Love Week 💖
      </h1>

      <p className="love-body text-center text-gray-600 mt-2">
        Unlock each day like a love story chapter…
      </p>

      {/* Timeline Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {days.map((day) => {
          const locked = day.id > unlockedDay;

          return (
            <button
              key={day.id}
              disabled={locked}
              onClick={() => setActiveDay(day.id)}
              className={`px-4 py-2 rounded-full text-sm shadow-md transition
                ${
                  locked
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : activeDay === day.id
                    ? "bg-[#6d1f2a] text-white"
                    : "bg-white text-[#6d1f2a]"
                }
              `}
            >
              Day {day.id} {locked ? "🔒" : "✨"}
            </button>
          );
        })}
      </div>

      {/* Day Content Box */}
      <div className="mt-10 bg-white rounded-3xl shadow-xl p-6">
        {/* Day 1 */}
        {activeDay === 1 && (
          <Day1Rose
            onFinish={() => {
              setActiveDay(2);
            }}
          />
        )}

        {/* Placeholder Days */}
        {activeDay !== 1 && (
          <div className="text-center">
            <h2 className="text-3xl love-title text-[#6d1f2a]">
              Coming Soon 💖
            </h2>
            <p className="love-body text-gray-600 mt-3">
              This chapter will unlock soon…
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
