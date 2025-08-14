import Image from 'next/image'

export default function Header() {
  return (
    <header className="relative h-64 overflow-hidden">
      <Image
        src="/images/materibg.jpg"
        alt="Background Header"
        fill
        className="object-cover"
        priority
      />
      
    
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      
      <div className="relative z-20 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Materi Pembelajaran
        </h1>
      </div>
    </header>
  )
}