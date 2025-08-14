export interface MateriItem {
  id: number
  title: string
  isHighlighted: boolean
  description?: string
  videoUrl?: string
  documentUrl?: string
  createdAt?: Date
  updatedAt?: Date
}