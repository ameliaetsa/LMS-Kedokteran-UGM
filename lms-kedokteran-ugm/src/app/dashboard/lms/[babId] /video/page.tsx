"use client";

import { useRouter } from "next/navigation";
import { X, Play } from "lucide-react";

export default function VideoPage({
  params,
}: {
  params: { babId: string };
}) {
  const router = useRouter();

  // Data video untuk setiap bab
  const videoData: { [key: string]: { title: string; videoUrl: string; description: string } } = {
    "1": {
      title: "Video Pelatihan Bab 1 - Pengenalan Dasar Memasak",
      videoUrl: "/videos/bab1.mp4", // Ganti dengan URL video yang sesuai
      description: "Video pembelajaran tentang pengenalan dasar memasak, peralatan, dan teknik dasar."
    },
    "2": {
      title: "Video Pelatihan Bab 2 - Teknik Memasak Dasar",
      videoUrl: "/videos/bab2.mp4",
      description: "Video pembelajaran tentang berbagai teknik memasak dasar seperti merebus, menggoreng, dan mengukus."
    },
    "3": {
      title: "Video Pelatihan Bab 3 - Resep dan Aplikasi",
      videoUrl: "/videos/bab3.mp4",
      description: "Video pembelajaran tentang aplikasi resep dan praktik memasak."
    }
  };

  const video = videoData[params.babId];

  if (!video) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Video tidak ditemukan</h1>
          <button
            onClick={() => router.back()}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 flex justify-between items-center z-10">
        <h1 className="text-xl font-bold">{video.title}</h1>
        <button
          onClick={() => router.back()}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Video Player */}
      <div className="flex items-center justify-center h-full p-16">
        <div className="w-full max-w-4xl">
          <video
            controls
            className="w-full rounded-lg"
            poster="/images/video-thumbnail.jpg"
          >
            <source src={video.videoUrl} type="video/mp4" />
            Browser Anda tidak mendukung pemutar video.
          </video>
          
          <div className="mt-4 text-white text-center">
            <p className="text-gray-300">{video.description}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4">
        <div className="flex justify-between items-center text-white">
          <button
            onClick={() => router.back()}
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
          >
            ← Kembali ke Materi
          </button>
          <span className="text-sm">Bab {params.babId}</span>
        </div>
      </div>
    </div>
  );
}