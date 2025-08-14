// components/MateriPembelajaran.tsx
import Header from './Header'
import MateriList from './MateriList'
import CloseButton from './CloseButton'

export default function MateriPembelajaran() {
  const materiData = [
    { id: 1, title: 'Materi Bab 1', isHighlighted: true },
    { id: 2, title: 'Materi Bab 2', isHighlighted: false },
    { id: 3, title: 'Materi Bab 3', isHighlighted: true },
    { id: 4, title: 'Materi Bab 3', isHighlighted: false },
    { id: 5, title: 'Materi Bab 3', isHighlighted: true },
    { id: 6, title: 'Materi Bab 3', isHighlighted: false },
  ]

  console.log('MateriPembelajaran component rendered') // Debug log

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Close Button - Moved outside for better visibility */}
      <CloseButton />
      
      <div className="bg-white min-h-screen">
        <div className="p-6">
          <MateriList items={materiData} />
        </div>
      </div>
    </div>
  )
}