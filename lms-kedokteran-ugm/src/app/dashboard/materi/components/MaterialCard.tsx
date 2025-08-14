"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface Material {
  name: string;
  icon: React.ElementType;
  type: "pdf" | "video" | "posttest";
}

interface MaterialCardProps {
  babId: number;
  title: string;
  materials: Material[];
  illustration?: string;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ 
  babId, 
  title, 
  materials, 
  illustration 
}) => {
  const router = useRouter();

  const handleClick = (type: string) => {
    // Routing berdasarkan tipe materi
    switch (type) {
      case "pdf":
        router.push(`/materi/${babId}/pdf`);
        break;
      case "video":
        router.push(`/materi/${babId}/video`);
        break;
      case "posttest":
        router.push(`/materi/${babId}/quiz`);
        break;
      default:
        console.log("Unknown material type:", type);
    }
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      {/* Header Hijau */}
      <div className="bg-green-500 px-6 py-4 relative">
        <h2 className="text-white font-bold text-lg">{title}</h2>
      </div>

      {/* Konten Materi */}
      <div className="bg-white px-6 py-4 relative">
        {/* Gambar ilustrasi di pojok kanan bawah */}
        {illustration && (
          <div className="absolute bottom-4 right-4">
            <img
              src={illustration}
              alt="Ilustrasi Materi"
              className="w-20 h-20 object-contain opacity-70"
              onError={(e) => {
                // Fallback jika gambar tidak ditemukan
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* List Materi */}
        <div className="space-y-3 pr-24 pb-6">
          {materials.map((material, idx) => {
            const Icon = material.icon;
            return (
              <div
                key={idx}
                onClick={() => handleClick(material.type)}
                className="flex items-center gap-4 py-3 px-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md group"
              >
                <Icon className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" />
                <span className="text-gray-800 font-medium group-hover:text-green-600 transition-colors">
                  {material.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;