import { Home, Laptop, Smartphone, Watch, Headphones } from "lucide-react"
import { Button } from "./ui/button"

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

const categories: Category[] = [
  { id: "all", name: "All", icon: Home },
  { id: "electronics", name: "Electronics", icon: Laptop },
  { id: "phones", name: "Phones", icon: Smartphone },
  { id: "wearables", name: "Wearables", icon: Watch },
  { id: "audio", name: "Audio", icon: Headphones },
]

interface SidebarProps {
  onCategorySelect: (categoryId: string) => void;
  selectedCategory: string;
} 

export function Sidebar({ onCategorySelect, selectedCategory }: SidebarProps) {
  return (
    <div className="w-64 border-r h-screen p-4">
      <h2 className="font-semibold mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "secondary" : "ghost"}
              className="w-full justify-start text-foreground"
              onClick={() => onCategorySelect(category.id)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {category.name}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
