import React from "react";

export default function LoveLayout({ children }) {
  return (
    <div className="min-h-screen flex justify-center">
      {/* Mobile Frame */}
      <div className="w-full max-w-107.5 px-4 py-6">
        {children}
      </div>
    </div>
  );
}
