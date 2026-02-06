import React,{ useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="px-4 py-2 rounded-full bg-[#6d1f2a] text-white shadow-lg text-sm"
      >
        {playing ? "Pause 🎶" : "Play 🎶"}
      </button>
    </div>
  );
}
