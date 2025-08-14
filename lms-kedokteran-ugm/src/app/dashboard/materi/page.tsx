"use client";
import React, { useState } from "react";
import { FileText, Play, List, X } from "lucide-react";

const MateriPembelajaran = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Data materi dari database
  const materiData = [
    {
      id: 1,
      title: "Bab 1",
      materials: [
        { name: "Materi bab 1.pdf", icon: FileText },
        { name: "Video pelatihan bab 1.mov", icon: Play },
        { name: "Post-test", icon: List },
      ],
    },
    {
      id: 2,
      title: "Bab 2",
      materials: [
        { name: "Materi bab 2.pdf", icon: FileText },
        { name: "Video bab 2.mov", icon: Play },
        { name: "Post-test", icon: List },
      ],
    },
    {
      id: 3,
      title: "Bab 3",
      materials: [
        { name: "Materi bab 3.pdf", icon: FileText },
        { name: "Video bab 3.mov", icon: Play },
        { name: "Post-test", icon: List },
      ],
    },
  ];

  if (!isModalOpen) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Buka Materi Pembelajaran
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background dengan gambar peralatan masak */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 opacity-80"></div>
        {/* Simulasi peralatan masak sebagai background */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-12 h-12 bg-pink-300 rounded-full opacity-60 transform rotate-12"></div>
          <div className="absolute top-32 right-20 w-8 h-16 bg-orange-300 rounded-lg opacity-60 transform -rotate-45"></div>
          <div className="absolute bottom-32 left-20 w-16 h-8 bg-yellow-300 rounded-full opacity-60"></div>
          <div className="absolute top-20 left-1/2 w-10 h-10 bg-red-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-20 right-16 w-14 h-14 bg-blue-300 rounded-full opacity-60"></div>
          <div className="absolute top-40 right-32 w-6 h-12 bg-green-300 rounded-lg opacity-60 transform rotate-12"></div>
        </div>
      </div>

      {/* Judul di atas */}
      <div className="relative z-10 text-center pt-12 pb-8">
        <h1 className="text-2xl font-bold text-green-700">
          Materi Pembelajaran
        </h1>
      </div>

      {/* Card Putih - Modal */}
      <div className="relative z-20 mx-4 bg-white rounded-t-3xl shadow-2xl min-h-[70vh] mt-8">
        {/* Tombol Close */}
        <button 
          onClick={() => setIsModalOpen(false)}
          className="absolute top-6 right-6 z-30 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Konten */}
        <div className="pt-16 pb-8 px-6">
          <div className="space-y-6">
            {materiData.map((bab) => (
              <div key={bab.id} className="rounded-xl overflow-hidden shadow-lg">
                {/* Header Hijau dengan ilustrasi */}
                <div className="bg-green-500 px-6 py-4 relative">
                  <h2 className="text-white font-bold text-lg">{bab.title}</h2>
                  
                  {/* Ilustrasi karakter chef di kanan */}
                  <div className="absolute top-2 right-4">
                    <div className="flex space-x-1">
                      <div className="w-14 h-14 relative">
                        <div className="w-full h-full bg-pink-200 rounded-full flex items-center justify-center border-2 border-white">
                          <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
                        </div>
                        {/* Simulasi topi chef */}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-t-full"></div>
                      </div>
                      <div className="w-14 h-14 relative">
                        <div className="w-full h-full bg-blue-200 rounded-full flex items-center justify-center border-2 border-white">
                          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                        </div>
                        {/* Simulasi topi chef */}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-t-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Konten Materi */}
                <div className="bg-white px-6 py-4 relative">
                  {/* Gambar ilustrasi di pojok kanan bawah */}
                  <div className="absolute right-4">
                    <img 
                      src="/Images/materi/bab1.png" 
                      alt="Ilustrasi Chef" 
                      className="w-full h-full object-contain opacity-70"
                    />
                  </div>
                  
                  <div className="space-y-3 pr-24 pb-6">
                    {bab.materials.map((material, idx) => {
                      const Icon = material.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-4 py-2 hover:bg-gray-50 rounded-lg px-2 cursor-pointer transition-colors"
                        >
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span className="text-gray-800 font-medium">
                            {material.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateriPembelajaran;