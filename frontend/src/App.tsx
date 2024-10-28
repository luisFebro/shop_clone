import { useState } from 'react'
import { Search, ShoppingCart, Home, Laptop, Smartphone, Watch, Headphones, Check, Theater } from "lucide-react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card"
import { ThemeProvider } from './components/theme-provider'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'

// Types
type Product = {
  id: string
  title: string
  description: string
  price: number
  category: string
  image: string
}

// Sample products
const sampleProducts: Product[] = [
  {
    id: "1",
    title: "MacBook Pro M2",
    description: "14-inch Retina display, 16GB RAM, 512GB SSD",
    price: 1499.99,
    category: "electronics",
    image: "https://picsum.photos/seed/macbook/400/300"
  },
  {
    id: "2",
    title: "Sony WH-1000XM5",
    description: "Industry-leading noise cancellation, 30-hour battery",
    price: 399.99,
    category: "audio",
    image: "https://picsum.photos/seed/sony1000/400/300"
  },
  {
    id: "3",
    title: "Apple Watch Ultra",
    description: "Titanium case, GPS + Cellular, Action button",
    price: 799.99,
    category: "wearables",
    image: "https://picsum.photos/seed/watchultra/400/300"
  },
  {
    id: "4",
    title: "iPhone 15 Pro Max",
    description: "A17 Pro chip, 1TB, Titanium design",
    price: 1399.99,
    category: "phones",
    image: "https://picsum.photos/seed/iphone15/400/300"
  },
  {
    id: "5",
    title: "Dell XPS 17",
    description: "17\" 4K Touch, Intel i9, 64GB RAM, RTX 4070",
    price: 2499.99,
    category: "electronics",
    image: "https://picsum.photos/seed/dellxps/400/300"
  },
  {
    id: "6",
    title: "AirPods Pro 2",
    description: "H2 chip, Adaptive Audio, MagSafe Case",
    price: 249.99,
    category: "audio",
    image: "https://picsum.photos/seed/airpodspro/400/300"
  },
  {
    id: "7",
    title: "Samsung Galaxy Z Fold 5",
    description: "Foldable display, S Pen support, 512GB",
    price: 1799.99,
    category: "phones",
    image: "https://picsum.photos/seed/fold5/400/300"
  },
  {
    id: "8",
    title: "Garmin Epix Pro",
    description: "AMOLED display, multi-band GPS, 32GB storage",
    price: 899.99,
    category: "wearables",
    image: "https://picsum.photos/seed/epix/400/300"
  },
  {
    id: "9",
    title: "iPad Pro M2",
    description: "12.9\" Liquid Retina XDR, 2TB, 5G",
    price: 1999.99,
    category: "electronics",
    image: "https://picsum.photos/seed/ipadpro/400/300"
  },
  {
    id: "10",
    title: "Bose 700",
    description: "11 levels of noise cancellation, 20-hour battery",
    price: 379.99,
    category: "audio",
    image: "https://picsum.photos/seed/bose700/400/300"
  },
  {
    id: "11",
    title: "Google Pixel 8 Pro",
    description: "Tensor G3, 50MP camera, Android 14",
    price: 999.99,
    category: "phones",
    image: "https://picsum.photos/seed/pixel8/400/300"
  },
  {
    id: "12",
    title: "Samsung Galaxy Watch 6",
    description: "BioActive Sensor, Sleep coaching, ECG",
    price: 399.99,
    category: "wearables",
    image: "https://picsum.photos/seed/watch6/400/300"
  },
  {
    id: "13",
    title: "ASUS ROG Strix",
    description: "RTX 4090, Ryzen 9, 64GB RAM, 2TB SSD",
    price: 3499.99,
    category: "electronics",
    image: "https://picsum.photos/seed/rogstrix/400/300"
  },
  {
    id: "14",
    title: "Sennheiser Momentum 4",
    description: "60-hour battery, adaptive noise cancellation",
    price: 349.99,
    category: "audio",
    image: "https://picsum.photos/seed/momentum/400/300"
  },
  {
    id: "15",
    title: "OnePlus 12",
    description: "Snapdragon 8 Gen 3, 100W charging, 1TB",
    price: 899.99,
    category: "phones",
    image: "https://picsum.photos/seed/oneplus12/400/300"
  },
  {
    id: "16",
    title: "Lenovo ThinkPad X1",
    description: "14\" 4K, Intel vPro, 32GB RAM, 1TB SSD",
    price: 1899.99,
    category: "electronics",
    image: "https://picsum.photos/seed/thinkpad/400/300"
  },
  {
    id: "17",
    title: "Beats Studio Pro",
    description: "Spatial Audio, 40-hour battery life",
    price: 349.99,
    category: "audio",
    image: "https://picsum.photos/seed/beatspro/400/300"
  },
  {
    id: "18",
    title: "Fitbit Sense 2",
    description: "Advanced health tracking, ECG, GPS",
    price: 299.99,
    category: "wearables",
    image: "https://picsum.photos/seed/sense2/400/300"
  },
  {
    id: "19",
    title: "Nothing Phone 2",
    description: "Glyph interface, 50MP camera, 256GB",
    price: 699.99,
    category: "phones",
    image: "https://picsum.photos/seed/nothing2/400/300"
  },
  {
    id: "20",
    title: "Microsoft Surface Laptop",
    description: "15\" PixelSense, Intel i7, 1TB SSD",
    price: 1599.99,
    category: "electronics",
    image: "https://picsum.photos/seed/surface/400/300"
  }
]

const categories = [
  { id: "all", name: "All Products", icon: Home },
  { id: "electronics", name: "Electronics", icon: Laptop },
  { id: "phones", name: "Phones", icon: Smartphone },
  { id: "wearables", name: "Wearables", icon: Watch },
  { id: "audio", name: "Audio", icon: Headphones },
]

function App() {
  const [products, setProducts] = useState(sampleProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cartItems, setCartItems] = useState<string[]>([])
  const [isCartAnimating, setIsCartAnimating] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  const addToCart = (productId: string) => {
    setCartItems(prev => [...prev, productId])
    // Trigger animation
    setIsCartAnimating(true)
    setTimeout(() => setIsCartAnimating(false), 300)
  }

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(id => id !== productId))
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Navbar
          onSearch={setSearchTerm} 
          isCartAnimating={isCartAnimating} 
          cartItems={cartItems} 
        />

        <div className="flex">
          <Sidebar onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />

          {/* Main Content */}
          <main className="flex-1 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id}>
                  <CardHeader className="p-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-48 w-full object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    <p className="mt-2 font-bold text-lg">{formatPrice(product.price)}</p>
                  </CardContent>
                  <CardFooter>
                    {cartItems.includes(product.id) ? (
                      <Button 
                        variant="secondary"
                        className="w-full"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Remove from Cart
                      </Button>
                    ) : (
                      <Button 
                        className="w-full"
                        onClick={() => addToCart(product.id)}
                      >
                        {cartItems.includes(product.id) ? (
                          <>
                            <Check className="mr-2 h-4 w-4" />
                            Added
                          </>
                        ) : (
                          'Add to Cart'
                        )}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
