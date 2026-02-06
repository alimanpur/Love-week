import React from "react";
export default function GlobalBackground({ theme = "rose" }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#fff7f0] via-[#fbe9e0] to-[#fdfcfb]" />

      {/* Floating petals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}
