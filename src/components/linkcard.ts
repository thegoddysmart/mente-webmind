import { ExternalLink, Download, Edit2, Trash2, Tag, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from '@/lib/types'

interface LinkCardProps {
  link: Link
  onDelete: (id: number) => void
  onExport: (link: Link) => void
}

export default function LinkCard({ link, onDelete, onExport }: LinkCardProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold mb-2">{link.title}</h2>
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
            <ExternalLink className="mr-1 h-4 w-4" /> {link.url}
          </a>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={() => onExport(link)}>
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => onDelete(link.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{link.summary}</p>
      <div className="mt-4 flex items-center space-x-2">
        <Tag className="h-4 w-4 text-gray-400" />
        <div className="flex flex-wrap gap-2">
          {link.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </div>
      {link.highlights.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Highlights:</h3>
          <ul className="list-disc list-inside">
            {link.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-600">{highlight}</li>
            ))}
          </ul>
        </div>
      )}
      {link.notes && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Notes:</h3>
          <p className="text-gray-600">{link.notes}</p>
        </div>
      )}
      <div className="mt-4 flex items-center text-sm text-gray-500">
        <Clock className="h-4 w-4 mr-1" />
        <span>Created: {formatDate(link.createdAt)}</span>
        <span className="mx-2">•</span>
        <span>Updated: {formatDate(link.updatedAt)}</span>
      </div>
    </div>
  )
}
