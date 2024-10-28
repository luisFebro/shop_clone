import { Search, ShoppingCart } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { ModeToggle } from "./ui/mode-toggle"

export function Navbar({
  onSearch,
  isCartAnimating,
  cartItems
}: {
  onSearch: (term: string) => void,
  isCartAnimating: boolean,
  cartItems: string[]
}) {
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
        <div className="flex items-center space-x-4">
          <div className="text-foreground">
            <ModeToggle />
          </div>
          <Button variant="outline" className="text-foreground">
            <ShoppingCart className={`h-4 w-4 mr-2 transition-transform ${isCartAnimating ? 'scale-125' : ''}`} />
            Cart ({cartItems.length})
          </Button>
        </div>
      </div>
    </nav>
  )
}
