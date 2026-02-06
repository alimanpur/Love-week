import React,{ useState } from "react";

const messages = {
  soft: "You are my gentle peace 🌸",
  passion: "My heart burns only for you ❤️",
  forever: "I’ll choose you in every lifetime ✨",
  calm: "With you, everything feels safe 🤍",
};

export default function RosePicker({ mood, onComplete }) {
  const [picked, setPicked] = useState(0);

  const pickRose = () => {
    setPicked(picked + 1);
    if (picked + 1 === 3) onComplete();
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl love-title text-[#6d1f2a]">
        Pick 3 Roses 🌹
      </h2>

      <p className="mt-4 love-body text-lg text-gray-700">
        {messages[mood]}
      </p>

      <button
        onClick={pickRose}
        className="mt-8 px-8 py-4 rounded-full bg-[#6d1f2a] text-white shadow-lg"
      >
        Pick a Rose ({picked}/3)
      </button>
    </div>
  );
}
