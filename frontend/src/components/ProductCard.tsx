import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { Product, formatPrice } from "@/lib/utils"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full">
      <CardHeader className="p-0">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <p className="mt-2 font-bold">{formatPrice(product.price)}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
