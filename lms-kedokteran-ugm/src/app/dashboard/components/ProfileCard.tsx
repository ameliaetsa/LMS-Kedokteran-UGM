"use client";
import React from "react";

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 gap-4">
      {/* Foto profil placeholder */}
      <div className="w-20 h-20 rounded-full bg-gray-300"></div>
      <div className="text-center">
        <h2 className="font-semibold text-black">Jane Doe</h2>
        <p className="text-sm text-gray-500">Mahasiswa</p>
      </div>

      {/* Countdown */}
      <div className="bg-[#C0EBA6]  font-extrabold text-black px-4 py-2 rounded-lg text-center font-mono">
        <span>03 : 12 : 54 : 36</span>
      </div>
    </div>
  );
}
