import React from "react";
import { ACTIVE_DAY } from "../data/release";

export default function Timeline({ currentDay, setCurrentDay, completedDays }) {
  const days = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex justify-center gap-3 flex-wrap mb-6">
      {days.map((day) => {
        const isReleased = day <= ACTIVE_DAY;
        const isCompleted = completedDays.includes(day);

        return (
          <button
            key={day}
            disabled={!isReleased}
            onClick={() => isReleased && setCurrentDay(day)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition
            ${
              currentDay === day
                ? "bg-[#6d1f2a] text-white"
                : "bg-white border border-gray-300 text-gray-600"
            }
            ${!isReleased ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            {isCompleted
              ? `Day ${day} ✅`
              : isReleased
              ? `Day ${day}`
              : "Coming Soon"}
          </button>
        );
      })}
    </div>
  );
}
