import { ShoppingCart } from '@phosphor-icons/react/dist/ssr'
import { CardContent, CardHeader, Cards, Cart, Flavors, Value } from './style'
import { Product } from '../../../../context/ProductsContext'
import { Counter } from '../../../../components/Counter'

interface ProductCard {
  product: Product
}

export function Card({ product } : ProductCard) {
  return(
    <Cards>
      <CardHeader>
        <img src={product.image} alt="" />
        <Flavors>Tradicional</Flavors>
        <h6>{product.name}</h6>
        <span>{product.description}</span>
      </CardHeader>
      <CardContent>
        <Value>
          <span>R$</span>
          <h5>9.90</h5>
        </Value>

        <Counter counterProduct={product}/>

        <Cart>
          <span><ShoppingCart size={22} weight='fill'/></span>
        </Cart>        
      </CardContent>
    </Cards>
  )
}