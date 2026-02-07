import React from "react";

export default function NightSkyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">

      {/* Stars */}
      <div className="stars"></div>

      {/* Shooting Stars */}
      <div className="shooting shooting1"></div>
      <div className="shooting shooting2"></div>
      <div className="shooting shooting3"></div>

      {/* Moon */}
      <div className="moon"></div>
    </div>
  );
}
