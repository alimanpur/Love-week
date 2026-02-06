import html2canvas from "html2canvas";

export default function LoveLetterCard({ letterText }) {
  const downloadCard = async () => {
    const card = document.getElementById("loveCard");
    const canvas = await html2canvas(card);

    const link = document.createElement("a");
    link.download = "love-letter.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="text-center">
      {/* Card */}
      <div
        id="loveCard"
        className="p-6 rounded-3xl bg-white shadow-xl border border-[#6d1f2a]"
      >
        <h2 className="love-title text-4xl text-[#6d1f2a]">
          From My Heart 💌
        </h2>

        <p className="mt-4 love-body text-gray-700 leading-relaxed">
          {letterText}
        </p>
      </div>

      {/* Download */}
      <button
        onClick={downloadCard}
        className="mt-6 w-full py-3 rounded-full bg-[#6d1f2a] text-white shadow-lg"
      >
        Download Love Card 📸
      </button>
    </div>
  );
}
