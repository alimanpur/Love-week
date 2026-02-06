import React from "react";
export default function LoveLayout({ children }) {
  return (
    <div className="min-h-screen flex justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
