import React from "react";
export default function MoodSelect({ setMood }) {
  const moods = [
    { name: "Soft Love 🌸", value: "soft" },
    { name: "Passion ❤️", value: "passion" },
    { name: "Forever ✨", value: "forever" },
    { name: "Calm 🤍", value: "calm" },
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl love-title text-[#6d1f2a]">
        Choose Today’s Mood
      </h2>

      <p className="mt-3 love-body text-gray-600 text-sm">
        Love feels different every day…
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {moods.map((m) => (
          <button
            key={m.value}
            onClick={() => setMood(m.value)}
            className="rounded-2xl bg-white shadow-md py-4 love-body text-[#6d1f2a]"
          >
            {m.name}
          </button>
        ))}
      </div>
    </div>
  );
}
