import { Folder, Hash, Brain, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { categories, tags } from '@/lib/data'

interface SidebarProps {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export default function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
  return (
    <TooltipProvider>
      <div className={`bg-white shadow-md flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between p-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <Brain className="h-8 w-8 text-primary" />
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
  )
}
