"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

// Data konten untuk setiap bab
const babContent = {
  "1": {
    title: "Pengenalan Dasar Memasak",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-green-600">Bab 1: Pengenalan Dasar Memasak</h2>
      
      <h3 class="text-xl font-semibold mb-3">1.1 Pengertian Memasak</h3>
      <p class="mb-4">
        Memasak adalah proses mengolah bahan makanan mentah menjadi makanan yang siap dikonsumsi 
        melalui berbagai teknik seperti merebus, menggoreng, memanggang, atau mengukus. 
        Memasak bukan hanya sekedar mengolah makanan, tetapi juga merupakan seni yang memadukan 
        cita rasa, aroma, dan penampilan makanan.
      </p>

      <h3 class="text-xl font-semibold mb-3">1.2 Peralatan Dasar Memasak</h3>
      <p class="mb-4">Peralatan dasar yang diperlukan dalam memasak antara lain:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Pisau chef untuk memotong berbagai bahan</li>
        <li>Talenan sebagai alas memotong</li>
        <li>Panci dan wajan untuk memasak</li>
        <li>Spatula untuk mengaduk dan membalik makanan</li>
        <li>Sendok sayur untuk menyajikan</li>
        <li>Timbangan untuk mengukur bahan</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">1.3 Bahan-Bahan Dasar</h3>
      <p class="mb-4">
        Bahan dasar memasak meliputi protein (daging, ikan, telur), karbohidrat (nasi, pasta, roti), 
        sayuran, dan bumbu-bumbu. Pemilihan bahan yang segar dan berkualitas sangat penting untuk 
        menghasilkan masakan yang lezat dan bergizi.
      </p>

      <h3 class="text-xl font-semibold mb-3">1.4 Teknik Dasar Memotong</h3>
      <p class="mb-4">Teknik memotong yang baik meliputi:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Dicing:</strong> Memotong bahan menjadi kubus kecil</li>
        <li><strong>Slicing:</strong> Memotong bahan menjadi irisan tipis</li>
        <li><strong>Chopping:</strong> Memotong bahan secara kasar</li>
        <li><strong>Mincing:</strong> Memotong bahan menjadi sangat halus</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">1.5 Keselamatan di Dapur</h3>
      <p class="mb-4">
        Keselamatan memasak sangat penting untuk mencegah kecelakaan. Selalu cuci tangan sebelum memasak, 
        gunakan pisau dengan hati-hati, pastikan kompor dalam keadaan mati setelah digunakan, 
        dan simpan bahan makanan pada suhu yang tepat.
      </p>
    `
  },
  "2": {
    title: "Teknik Memasak Dasar",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-green-600">Bab 2: Teknik Memasak Dasar</h2>
      
      <h3 class="text-xl font-semibold mb-3">2.1 Merebus (Boiling)</h3>
      <p class="mb-4">
        Merebus adalah teknik memasak dengan menggunakan air mendidih pada suhu 100°C. 
        Teknik ini cocok untuk memasak pasta, sayuran, dan membuat kaldu. 
        Pastikan air benar-benar mendidih sebelum memasukkan bahan makanan.
      </p>

      <h3 class="text-xl font-semibold mb-3">2.2 Menggoreng (Frying)</h3>
      <p class="mb-4">Terdapat beberapa jenis teknik menggoreng:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Pan frying:</strong> Menggoreng dengan sedikit minyak di wajan</li>
        <li><strong>Deep frying:</strong> Menggoreng dengan minyak yang banyak</li>
        <li><strong>Stir frying:</strong> Menumis dengan api besar dan gerakan cepat</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">2.3 Memanggang (Grilling/Roasting)</h3>
      <p class="mb-4">
        Memanggang menggunakan panas kering untuk memasak makanan. Teknik ini menghasilkan 
        tekstur luar yang renyah dan bagian dalam yang lembut. Cocok untuk daging, ikan, dan sayuran.
      </p>

      <h3 class="text-xl font-semibold mb-3">2.4 Mengukus (Steaming)</h3>
      <p class="mb-4">
        Mengukus adalah teknik memasak yang menggunakan uap air panas. Teknik ini mempertahankan 
        nutrisi makanan dengan baik dan cocok untuk sayuran, ikan, dan dim sum.
      </p>

      <h3 class="text-xl font-semibold mb-3">2.5 Menumis (Sautéing)</h3>
      <p class="mb-4">
        Menumis adalah teknik memasak cepat dengan sedikit minyak pada api sedang hingga besar. 
        Bahan makanan harus dipotong kecil dan dimasak sambil terus diaduk untuk hasil yang merata.
      </p>
    `
  },
  "3": {
    title: "Resep dan Aplikasi",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-green-600">Bab 3: Resep dan Aplikasi</h2>
      
      <h3 class="text-xl font-semibold mb-3">3.1 Nasi Goreng Sederhana</h3>
      <p class="mb-3"><strong>Bahan-bahan:</strong></p>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>3 piring nasi putih dingin</li>
        <li>2 butir telur</li>
        <li>3 siung bawang putih, cincang halus</li>
        <li>2 sdm kecap manis</li>
        <li>1 sdt garam</li>
        <li>Minyak goreng secukupnya</li>
      </ul>
      
      <p class="mb-3"><strong>Cara membuat:</strong></p>
      <ol class="list-decimal list-inside mb-4 space-y-2">
        <li>Panaskan minyak di wajan, kocok telur dan buat orak-arik</li>
        <li>Tumis bawang putih hingga harum</li>
        <li>Masukkan nasi, aduk rata</li>
        <li>Tambahkan kecap manis dan garam, aduk hingga merata</li>
        <li>Masak hingga nasi panas dan bumbu meresap</li>
      </ol>

      <h3 class="text-xl font-semibold mb-3">3.2 Sup Ayam Sederhana</h3>
      <p class="mb-3"><strong>Bahan-bahan:</strong></p>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>500g ayam, potong sesuai selera</li>
        <li>1 buah wortel, potong dadu</li>
        <li>2 batang seledri, iris tipis</li>
        <li>1 liter air</li>
        <li>Garam dan merica secukupnya</li>
      </ul>

      <p class="mb-3"><strong>Cara membuat:</strong></p>
      <ol class="list-decimal list-inside mb-4 space-y-2">
        <li>Rebus ayam dalam air hingga empuk</li>
        <li>Angkat ayam, suwir-suwir dagingnya</li>
        <li>Masukkan wortel ke dalam kaldu, masak 10 menit</li>
        <li>Tambahkan ayam suwir dan seledri</li>
        <li>Bumbui dengan garam dan merica, masak 5 menit lagi</li>
      </ol>

      <h3 class="text-xl font-semibold mb-3">3.3 Tips Praktis</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Siapkan semua bahan sebelum mulai memasak (mise en place)</li>
        <li>Cicip makanan secara berkala untuk menyesuaikan rasa</li>
        <li>Gunakan api yang sesuai dengan teknik memasak</li>
        <li>Bersihkan peralatan segera setelah digunakan</li>
        <li>Simpan sisa makanan dengan benar</li>
      </ul>
    `
  }
};

export default function MateriPdfPage({
  params,
}: {
  params: { babId: string };
}) {
  const router = useRouter();
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const babData = babContent[params.babId as keyof typeof babContent];
    setContent(babData);
  }, [params.babId]);

  if (!content) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Materi tidak ditemukan</h1>
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
    <div className="fixed inset-0 bg-white overflow-y-auto">
      {/* Header dengan tombol close */}
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold text-green-600">
          {content.title}
        </h1>
        <button
          onClick={() => router.back()}
          className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Konten materi */}
      <div className="max-w-4xl mx-auto p-8">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
        
        {/* Tombol navigasi */}
        <div className="mt-12 flex justify-between items-center border-t border-gray-200 pt-8">
          <button
            onClick={() => router.back()}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            ← Kembali ke Materi
          </button>
          
          <div className="text-sm text-gray-500">
            Bab {params.babId} - {content.title}
          </div>
        </div>
      </div>
    </div>
  );
}