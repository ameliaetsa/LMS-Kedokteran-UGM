"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProfileStore } from "@/services/data/profileData";

export default function EditProfile() {
  const router = useRouter();
  const profile = useProfileStore();
  const setProfile = useProfileStore((state: { setProfile: any }) => state.setProfile);

  const [isOpen, setIsOpen] = useState(true);
  const [form, setForm] = useState({ ...profile });
  const [newPhoto, setNewPhoto] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewPhoto(url);
    }
  };

  const handleSave = () => {
    setProfile({
      ...form,
      photo: newPhoto || form.photo,
    });
    setIsOpen(false);
    router.push("/dashboard/profile");
  };

  const handleCancel = () => {
    setIsOpen(false);
    router.push("/dashboard/profile");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[520px] relative animate-slideUp">
        {/* Tombol Close */}
        <button
          onClick={handleCancel}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl cursor-pointer transition-colors"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-black mb-6 text-center">Edit Profile</h2>

        {/* Foto */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg border-4 border-green-500">
            <Image
              src={newPhoto || form.photo}
              alt="Profile"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
          <label className="mt-3 cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition-colors">
            Ganti Foto
            <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
          </label>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 text-black bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-text"
            placeholder="Nama Lengkap"
          />
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 text-black bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <input
            type="text"
            name="profesi"
            value={form.profesi}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-green-500 cursor-text"
            placeholder="Profesi"
          />
          <input
            type="text"
            name="memberId"
            value={form.memberId}
            readOnly
            className="border rounded-md px-3 py-2 bg-gray-100 text-black cursor-not-allowed"
          />
        </div>

        {/* Tombol */}
        <div className="flex gap-4 mt-6 justify-center">
          <button
            onClick={handleSave}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg shadow cursor-pointer transition-colors"
          >
            Simpan
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg shadow cursor-pointer transition-colors"
          >
            Batal
          </button>
        </div>
      </div>

      {/* Animasi */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
