"use client";
import React from "react";

interface ProgressItem {
  label: string;
  value: number;
  status: string; // e.g. "Selesai", "Danger"
}

export default function ProgressBar() {
  const items: ProgressItem[] = [
    { label: "materi", value: 100, status: "Selesai" },
    { label: "Post-Test", value: 75, status: "Sedang" },
    { label: "video", value: 60, status: "Danger" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="mb-4 font-semibold text-black">Your Progress</h3>
      {items.map((item, idx) => (
        <div key={idx} className="mb-3">
          <div className="flex justify-between text-sm mb-1 text-black">
            <span>{item.label}</span>
            <span>{item.value}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                item.status === "Selesai"
                  ? "bg-green-500"
                  : item.status === "Danger"
                  ? "bg-red-500"
                  : "bg-yellow-500"
              }`}
              style={{ width: `${item.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
