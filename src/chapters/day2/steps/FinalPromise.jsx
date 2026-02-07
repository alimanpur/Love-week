import React from "react";

export default function FinalPromise({ onFinish }) {
  return (
    <div className="text-center p-10 rounded-3xl bg-linear-to-b
    from-[#1e293b] to-[#0b1120] text-white shadow-2xl">
      <h2 className="love-title text-5xl">She Said Yes 💍✨</h2>

      <p className="love-body mt-6 text-gray-200">
        This moment will stay in my heart forever.
      </p>

      <button
        onClick={onFinish}
        className="mt-10 w-full py-3 rounded-full bg-white text-black"
      >
        Finish Day 2 🌙
      </button>
    </div>
  );
}
