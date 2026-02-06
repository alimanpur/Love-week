import React from "react";
export default function FloatingPetals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Petals */}
      <span className="petal left-[10%] animation-delay-0">🌸</span>
      <span className="petal left-[30%] animation-delay-2000">🌸</span>
      <span className="petal left-[50%] animation-delay-4000">🌸</span>
      <span className="petal left-[70%] animation-delay-1000">🌸</span>
      <span className="petal left-[90%] animation-delay-3000">🌸</span>
    </div>
  );
}
