'use client';
interface MateriItemType {
  id: number
  title: string
  isHighlighted: boolean
}

interface MateriItemProps {
  item: MateriItemType
  onClick: () => void
}

export default function MateriItem({ item, onClick }: MateriItemProps) {
  return (
    <div 
      className={`p-4 rounded cursor-pointer transition-colors hover:bg-green-100 border ${
        item.isHighlighted ? 'bg-green-300 border-green-400' : 'bg-white border-gray-200'
      }`}
      onClick={onClick}
    >
      <span className="text-gray-800 text-lg font-medium">{item.title}</span>
    </div>
  )
}