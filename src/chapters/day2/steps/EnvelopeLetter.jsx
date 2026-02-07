import React, { useState } from "react";

export default function EnvelopeLetter({ onNext }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="royal-card text-center p-10">
      <h2 className="love-title text-4xl royal-title">
        The Royal Letter 💌
      </h2>

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="mt-10 text-7xl"
        >
          ✉️
        </button>
      ) : (
        <div className="mt-8 bg-white/10 p-6 rounded-2xl border border-yellow-300/20">
          <p className="royal-text leading-relaxed">
            Under this midnight sky, 
            where stars whisper secrets,I realize that a single lifetime isn’t enough to love you—but I’d like to start with this one. 💍
          </p>

          <button onClick={onNext} className="royal-button mt-6">
            Continue ✨
          </button>
        </div>
      )}
    </div>
  );
}
