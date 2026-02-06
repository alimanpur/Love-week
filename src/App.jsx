import React from "react";
import GlobalBackground from "./components/GlobalBackground.jsx";
import LoveWeek from "./pages/LoveWeek.jsx";
import MusicToggle from "./components/MusicToggle.jsx";

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Full Page Animated Background */}
      <GlobalBackground />
      <MusicToggle />

      {/* Main Love Week Timeline */}
      <LoveWeek />
    </div>
  );
}
