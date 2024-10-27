import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { ThemeToggle } from "./ui/theme-toggle"

export function Navbar({ onSearch }: { onSearch: (term: string) => void }) {
  return (
    <nav className="border-b">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">ShopClone</h1>
        <div className="flex items-center w-1/3 relative">
          <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-8"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="p-2">Cart (0)</button>
        </div>
      </div>
    </nav>
  )
}
