import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Link } from '@/lib/types'

interface AddLinkModalProps {
  isOpen: boolean
  onClose: () => void
  onAddLink: (newLink: Omit<Link, 'id' | 'createdAt' | 'updatedAt'>) => void
}

export default function AddLinkModal({ isOpen, onClose, onAddLink }: AddLinkModalProps) {
  const [newLink, setNewLink] = useState<Omit<Link, 'id' | 'createdAt' | 'updatedAt'>>({
    url: "",
    title: "",
    summary: "",
    tags: [],
    category: "",
    notes: "",
    highlights: []
  })

  const handleSubmit = () => {
    onAddLink(newLink)
    setNewLink({ url: "", title: "", summary: "", tags: [], category: "", notes: "", highlights: [] })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Link</DialogTitle>
          <DialogDescription>Enter the details of the link you want to save.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              URL
            </Label>
            <Input
              id="url"
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={newLink.title}
              onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="summary" className="text-right">
              Summary
            </Label>
            <Textarea
              id="summary"
              value={newLink.summary}
              onChange={(e) => setNewLink({ ...newLink, summary: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tags" className="text-right">
              Tags
            </Label>
            <Input
              id="tags"
              value={newLink.tags.join(', ')}
              onChange={(e) => setNewLink({ ...newLink, tags: e.target.value.split(',').map(tag => tag.trim()) })}
              className="col-span-3"
              placeholder="Comma-separated tags"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input
              id="category"
              value={newLink.category}
              onChange={(e) => setNewLink({ ...newLink, category: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Notes
            </Label>
            <Textarea
              id="notes"
              value={newLink.notes}
              onChange={(e) => setNewLink({ ...newLink, notes: e.target.value })}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Save Link</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
