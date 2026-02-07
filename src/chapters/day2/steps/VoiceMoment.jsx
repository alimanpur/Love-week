import React from "react";

export default function VoiceMoment({ onNext }) {
  return (
    <div className="royal-card text-center p-10">
      <h2 className="love-title text-4xl royal-title">
        A Song From My Heart 🎙️
      </h2>

      <p className="royal-text mt-4">
        Press play… and hear what words cannot hold.
      </p>

      {/* Play Only */}
      <audio controls className="w-full mt-6">
        <source src="/voice-note.mp3" type="audio/mp3" />
      </audio>

      <button onClick={onNext} className="royal-button mt-8">
        Continue ✨
      </button>
    </div>
  );
}
