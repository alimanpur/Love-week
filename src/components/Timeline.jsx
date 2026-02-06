import React from "react";
import { chapters } from "../data/chapters";

export default function Timeline({ activeDay, setActiveDay, unlockedDay }) {
  // Only show unlocked chapters
  const visibleChapters = chapters.slice(0, unlockedDay);

  return (
    <div className="flex gap-3 overflow-x-auto py-3 mb-6">
      {visibleChapters.map((day) => (
        <button
          key={day.id}
          onClick={() => setActiveDay(day.id)}
          className={`shrink-0 px-4 py-2 rounded-full transition shadow-sm
            ${
              activeDay === day.id
                ? "bg-[#6d1f2a] text-white"
                : "bg-white text-[#6d1f2a]"
            }
            hover:scale-105
          `}
        >
          Day {day.id}
        </button>
      ))}
    </div>
  );
}
