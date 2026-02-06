import React from "react";
export default function ChapterCard({ title, subtitle, children }) {
  return (
    <div className="rounded-3xl bg-white shadow-xl p-6">
      <h1 className="text-5xl love-title text-(--primary)]">
        {title}
      </h1>

      <p className="mt-2 love-body text-gray-600">
        {subtitle}
      </p>

      <div className="mt-6">{children}</div>
    </div>
  );
}
