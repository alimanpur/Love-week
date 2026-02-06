import React from "react";
export default function GoldenRose({ unlock }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl love-title text-[#6d1f2a]">
        A Secret Rose Appears…
      </h2>

      <button
        onClick={unlock}
        className="mt-8 text-6xl"
      >
        🌹✨
      </button>

      <p className="mt-4 love-body text-gray-600">
        Tap the Golden Rose to unlock something rare.
      </p>
    </div>
  );
}
