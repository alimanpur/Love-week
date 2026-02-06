import React from "react";
import RandomBouquet from "../../components/RandomBouquet";

export default function BouquetPreview({ bouquetSize, onNext }) {
  return (
    <div className="text-center">
      <h2 className="text-5xl love-title text-[#6d1f2a]">
        Your Bouquet 💐
      </h2>

      <p className="mt-3 love-body text-gray-600">
        A surprise bouquet made just for you…
      </p>

      {/* Random Bouquet Image */}
      <RandomBouquet />

      <p className="mt-6 love-body text-gray-700 text-sm">
        Bouquet Size: <b>{bouquetSize}</b> Roses
      </p>

      <button
        onClick={onNext}
        className="mt-8 w-full py-3 rounded-full bg-[#6d1f2a] text-white shadow-lg"
      >
        Continue ✨
      </button>
    </div>
  );
}
