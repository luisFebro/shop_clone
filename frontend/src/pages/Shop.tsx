import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Sidebar } from "@/components/Sidebar"
import { ProductGrid } from "@/components/ProductGrid"
import { Product } from "@/lib/utils"

// Sample products - replace with your actual data or API call
const sampleProducts: Product[] = [
  {
    id: "1",
    title: "Laptop Pro",
    description: "High-performance laptop for professionals",
    price: 1299.99,
    category: "electronics",
    image: "https://picsum.photos/seed/laptop/400/300",
  },
  // Add more sample products...
]

export function Shop() {
  const [products, setProducts] = useState(sampleProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      <Navbar onSearch={setSearchTerm} />
      <div className="flex">
        <Sidebar onCategorySelect={setSelectedCategory} />
        <main className="flex-1">
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
    </div>
  )
}
