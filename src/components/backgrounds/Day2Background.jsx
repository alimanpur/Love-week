import React from "react";

export default function Day2Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Full Royal Midnight Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#050816] via-[#0b1d39] to-black" />

      {/* Silver Mist Glow */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-slate-200/10 blur-[160px] rounded-full" />

      {/* Golden Royal Glow */}
      <div className="absolute bottom-0 right-1/3 w-100 h-100 bg-yellow-300/10 blur-[180px] rounded-full" />

      {/* Floating Stars Animation */}
      {Array.from({ length: 45 }).map((_, i) => (
        <span
          key={i}
          className="absolute text-white opacity-40 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 6 + 3}px`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
