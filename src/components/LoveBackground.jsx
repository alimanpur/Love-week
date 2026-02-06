import React from "react";
export default function LoveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft moving gradient blobs */}
      <div className="blob blob1" />
      <div className="blob blob2" />

      {/* Floating petals */}
      <span className="petal left-[15%]">🌸</span>
      <span className="petal left-[40%]">🌸</span>
      <span className="petal left-[70%]">🌸</span>
      <span className="petal left-[90%]">🌸</span>
    </div>
  );
}
