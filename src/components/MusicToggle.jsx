import React, { useRef, useState, useEffect } from "react";

export default function MusicToggle({ currentDay }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // 🎵 Music per day
  const musicSrc =
    currentDay === 2 ? "/music/day2.mp3" : "/music/day1.mp3";

  // Reset when day changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setPlaying(false);
    }
  }, [currentDay]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  // 🎨 Button Theme per Day
  const buttonTheme =
    currentDay === 2
      ? "bg-gradient-to-r from-yellow-300 to-yellow-500 text-black"
      : "bg-[#6b1d2a] text-white";

  return (
    <>
      <audio ref={audioRef}>
        <source src={musicSrc} type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className={`
          fixed bottom-6 right-6 z-50
          px-5 py-3 rounded-full shadow-xl
          font-semibold transition hover:scale-105
          ${buttonTheme}
        `}
      >
        {playing ? "Pause 🎶" : "Play 🎵"}
      </button>
    </>
  );
}
