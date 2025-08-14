
import { X, FileText, Video, List } from "lucide-react";
import Image from "next/image";

export default function MateriPembelajaranPage() {
  const materi = [
    {
      bab: "Bab 1",
      pdf: "Materi bab 1.pdf",
      video: "Video pelatihan bab 1.mov",
      postTest: "Post-test",
      img: "/images/ilustrasi.png",
    },
    {
      bab: "Bab 2",
      pdf: "Materi bab 2.pdf",
      video: "Video bab 2.mov",
      postTest: "Post-test",
      img: "/images/ilustrasi.png",
    },
    {
      bab: "Bab 3",
      pdf: "Materi bab 3.pdf",
      video: "Video bab 3.mov",
      postTest: "Post-test",
      img: "/images/ilustrasi.png",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/bg.png"
          alt="Background"
          fill
          className="object-cover opacity-80"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 flex justify-center items-center">
        <h1 className="text-green-700 font-bold text-lg md:text-xl">Materi Pembelajaran</h1>
        <button className="absolute right-6 top-6 p-1 hover:bg-gray-200 rounded-full">
          <X size={24} />
        </button>
      </div>

      {/* Konten */}
      <div className="relative z-10 max-w-4xl mx-auto p-4 space-y-6">
        {materi.map((item, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden">
            {/* Header Bab */}
            <div className="bg-green-500 text-white font-bold px-4 py-2 flex justify-between items-center">
              <span>{item.bab}</span>
              <div className="flex-shrink-0">
                <Image src={item.img} alt="Ilustrasi" width={60} height={60} className="rounded" />
              </div>
            </div>

            {/* Isi Materi */}
            <div className="bg-white px-4 py-3 flex flex-col gap-2 md:flex-row md:items-center justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FileText size={20} />
                  <span>{item.pdf}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video size={20} />
                  <span>{item.video}</span>
                </div>
                <div className="flex items-center gap-2">
                  <List size={20} />
                  <span>{item.postTest}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
