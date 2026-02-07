import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";

export default function SheSaidYes() {
  const cardRef = useRef(null);

  // ✅ Download Proposal Card Fix
  const handleDownload = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: "#050816", // ✅ Force safe background
      scale: 2,
      useCORS: true,
    });

    const link = document.createElement("a");
    link.download = "She-Said-Yes.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center"
    >
      {/* ✅ Navy + Gold Theme Container */}
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">

        {/* ✅ Card to Capture */}
        <div
          ref={cardRef}
          className="rounded-2xl px-6 py-10 text-center bg-linear-to-b from-[#0b1d39] to-[#050816] border border-yellow-300/20"
        >
          <h1 className="love-title text-5xl text-yellow-200 drop-shadow-lg">
            She Said Yes 💍✨
          </h1>

          <p className="love-body text-slate-200 mt-4 text-sm tracking-wide">
            This moment is forever written in the stars.
          </p>

          <div className="mt-6 text-yellow-300 text-3xl animate-pulse">
            ✦ ✦ ✦
          </div>
        </div>

        {/* ✅ Download Button */}
        <button
          onClick={handleDownload}
          className="mt-6 w-full py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-lg hover:scale-105 transition"
        >
          📥 Download Proposal Card
        </button>
      </div>
    </motion.div>
  );
}
