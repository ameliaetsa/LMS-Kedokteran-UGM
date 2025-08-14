'use client';
import MateriItem from './MateriItem'

interface MateriItemType {
  id: number
  title: string
  isHighlighted: boolean
}

interface MateriListProps {
  items: MateriItemType[]
}

export default function MateriList({ items }: MateriListProps) {
  const handleItemClick = (item: MateriItemType) => {
    console.log(`Clicked: ${item.title}`)
  }

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <MateriItem 
          key={item.id} 
          item={item}
          onClick={() => handleItemClick(item)}
        />
      ))}
    </div>
  )
}