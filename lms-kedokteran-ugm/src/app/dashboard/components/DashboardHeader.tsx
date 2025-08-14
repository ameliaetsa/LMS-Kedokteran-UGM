"use client";
import React from "react";
import Image from "next/image";

export default function DashboardHeader() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
      {/* Background Gambar */}
      <Image
        src="/images/bg.jpg" 
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay Transparan supaya teks lebih jelas */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Teks di atas gambar */}
      <h1 className="relative text-3xl font-bold text-white">E-Learning</h1>
    </div>
  );
}
