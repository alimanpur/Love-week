import React from "react";

export default function ShootingStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className="shooting-star"
          style={{
            top: `${10 + Math.random() * 50}%`,
            left: `${40 + Math.random() * 60}%`,
            animationDelay: `${i * 3}s`,
          }}
        />
      ))}
    </div>
  );
}
