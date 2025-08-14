"use client";
import React, { useState } from "react";
import { FileText, Play, List, X } from "lucide-react";
import MaterialCard from "./MaterialCard";
import { useRouter } from "next/navigation"; // <-- tambahkan ini

const MateriPembelajaran = () => {
  const router = useRouter(); // <-- inisialisasi router
  const [isModalOpen, setIsModalOpen] = useState(true);

  const materiData = [
    {
      id: 1,
      title: "Bab 1",
      illustration: "/Images/materi/bab1.png",
      materials: [
        { name: "Materi bab 1.pdf", icon: FileText, type: "pdf" as "pdf" },
        { name: "Video pelatihan bab 1.mov", icon: Play, type: "video" as "video" },
        { name: "Post-test", icon: List, type: "posttest" as "posttest" },
      ],
    },
    {
      id: 2,
      title: "Bab 2",
      illustration: "/Images/materi/bab2.png",
      materials: [
        { name: "Materi bab 2.pdf", icon: FileText, type: "pdf" as "pdf" },
        { name: "Video bab 2.mov", icon: Play, type: "video" as "video" },
        { name: "Post-test", icon: List, type: "posttest" as "posttest" },
      ],
    },
    {
      id: 3,
      title: "Bab 3",
      illustration: "/Images/materi/bab3.png",
      materials: [
        { name: "Materi bab 3.pdf", icon: FileText, type: "pdf" as "pdf" },
        { name: "Video bab 3.mov", icon: Play, type: "video" as "video" },
        { name: "Post-test", icon: List, type: "posttest" as "posttest" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 opacity-80"></div>

      <div className="relative z-10 text-center pt-12 pb-8">
        <h1 className="text-2xl font-bold text-green-700">Materi Pembelajaran</h1>
      </div>

      <div className="relative z-20 mx-4 bg-white rounded-t-3xl shadow-2xl min-h-[70vh] mt-8">
        <button
          onClick={() => router.push("/dashboard")}
          className="absolute top-6 right-6 z-30 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="pt-16 pb-8 px-6 space-y-6">
          {materiData.map((bab) => (
            <MaterialCard
              key={bab.id}
              babId={bab.id}
              title={bab.title}
              materials={bab.materials}
              illustration={bab.illustration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MateriPembelajaran;
