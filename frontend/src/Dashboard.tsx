import { useState } from "react"
import Logo from '@/assets/mente-logo.png'
import { Search, Plus, Tag, Folder, ExternalLink, Edit2, Trash2, User, Settings, LogOut, Download, ChevronLeft, ChevronRight, Hash, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock data for saved links
const mockLinks = [
  {
    id: 1,
    url: "https://example.com/article1",
    title: "The Future of AI in Web Development",
    summary: "This article discusses the potential impact of AI on web development practices and tools.",
    tags: ["AI", "Web Development", "Technology"],
    category: "Technology",
    notes: "Interesting insights on how AI might change my workflow.",
    highlights: ["AI-powered code generation", "Automated testing using machine learning"],
    createdAt: new Date("2023-05-15T10:30:00"),
    updatedAt: new Date("2023-05-16T14:45:00"),
  },
  {
    id: 2,
    url: "https://example.com/article2",
    title: "10 Essential React Hooks for Efficient Development",
    summary: "A comprehensive guide to using React Hooks for building more efficient and maintainable components.",
    tags: ["React", "JavaScript", "Web Development"],
    category: "Programming",
    notes: "Great reference for improving my React skills.",
    highlights: ["useEffect hook for side effects", "Custom hooks for reusable logic"],
    createdAt: new Date("2023-05-10T09:15:00"),
    updatedAt: new Date("2023-05-10T09:15:00"),
  },
]

const categories = [
  { name: "Technology", icon: Folder },
  { name: "Programming", icon: Folder },
]

const tags = ["AI", "React", "JavaScript"]

function DashboardComponent() {
  const [links, setLinks] = useState(mockLinks)
  const [searchQuery, setSearchQuery] = useState("")
  const [newLink, setNewLink] = useState({ url: "", title: "", summary: "", tags: "", category: "", notes: "" })
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // In a real application, this would trigger a search in the backend
  }

  const handleAddLink = () => {
    const now = new Date()
    const newLinkWithId = {
      ...newLink,
      id: links.length + 1,
      tags: newLink.tags.split(","),
      highlights: [],
      createdAt: now,
      updatedAt: now,
    }
    setLinks([...links, newLinkWithId])
    setNewLink({ url: "", title: "", summary: "", tags: "", category: "", notes: "" })
    setIsAddLinkModalOpen(false)
  }

  const handleDeleteLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id))
  }

  const handleExportLink = (link: any) => {
    // In a real application, this would trigger the export functionality
    console.log("Exporting link:", link)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <TooltipProvider>
        <div className={`bg-white shadow-md flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between p-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center">
                    <img src={Logo} className="h-8 w-auto text-primary" />
                    {isSidebarOpen && <span className="text-2xl font-bold text-primary ml-2">Mente</span>}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Mente</p>
                </TooltipContent>
              </Tooltip>
              {isSidebarOpen && (
                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="ml-auto">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-2">
              <h2 className={`text-xl font-bold mb-4 ${isSidebarOpen ? '' : 'sr-only'}`}>Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="w-full justify-start">
                          <category.icon className="h-4 w-4 mr-2" />
                          {isSidebarOpen && <span>{category.name}</span>}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{category.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                ))}
              </ul>
              <h2 className={`text-xl font-bold mt-6 mb-4 ${isSidebarOpen ? '' : 'sr-only'}`}>Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Badge variant="secondary" className={isSidebarOpen ? '' : 'p-2'}>
                        {isSidebarOpen ? tag : <Hash className="h-4 w-4" />}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{tag}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
          {!isSidebarOpen && (
            <div className="p-4">
              <Button variant="ghost" size="icon" onClick={toggleSidebar} className="w-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </TooltipProvider>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex justify-end items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search bookmarks..."
                className="pl-8 w-64"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <Dialog open={isAddLinkModalOpen} onOpenChange={setIsAddLinkModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-black text-white">
                  <Plus className="mr-2 h-4 w-4" /> Add Link
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white opacity-100">
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
                      value={newLink.tags}
                      onChange={(e) => setNewLink({ ...newLink, tags: e.target.value })}
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
                  <Button className="text-white" onClick={handleAddLink}>Save Link</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Saved Links */}
        <div className="space-y-6">
          {links.map((link) => (
            <div key={link.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold mb-2">{link.title}</h2>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                    <ExternalLink className="mr-1 h-4 w-4" /> {link.url}
                  </a>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={() => handleExportLink(link)}>
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => handleDeleteLink(link.id)}>
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardComponent;