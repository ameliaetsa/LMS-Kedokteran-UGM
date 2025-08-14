'use client'

import { useRouter } from 'next/navigation'

export default function CloseButton() {
  const router = useRouter()

  const handleClose = () => {
    console.log('Close button clicked!') // Debug log
    router.push('/dashboard')
  }

  console.log('CloseButton component rendered') // Debug log

  return (
    <button 
      onClick={handleClose}
      className="fixed top-4 right-4 z-50   text-white transition-colors p-4  shadow-2xl border-2 rounded-full border-white"
      aria-label="Kembali ke dashboard"
      style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 9999 }} // Inline style sebagai backup
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M6 18L18 6M6 6l12 12" 
        />
      </svg>
    </button>
  )
}