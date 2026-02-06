import React,{ useState } from "react";

export default function BouquetBuilder({ onDone }) {
  const [name, setName] = useState("");

  return (
    <div className="text-center">
      <h2 className="text-4xl love-title text-[#6d1f2a]">
        Build Your Bouquet 💐
      </h2>

      <p className="mt-3 love-body text-gray-600">
        Give this bouquet a name…
      </p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="My Love Bouquet"
        className="mt-6 w-full rounded-2xl px-4 py-3 border"
      />

      <button
        onClick={() => onDone(name)}
        className="mt-6 px-6 py-3 rounded-full bg-[#6d1f2a] text-white"
      >
        Finish Bouquet ✨
      </button>
    </div>
  );
}
