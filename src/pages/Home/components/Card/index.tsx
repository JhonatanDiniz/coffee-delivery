import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react/dist/ssr'
import { CardContent, CardHeader, Cards, Cart, Flavors, Input, Value } from './style'
import { Product } from '../../../../context/ProductsContext'

export function Card({ name, description, price, image } : Product) {
  return(
    <Cards>
      <CardHeader>
        <img src={image} alt="" />
        <Flavors>Tradicional</Flavors>
        <h6>{name}</h6>
        <span>{description}</span>
      </CardHeader>
      <CardContent>
        <Value>
          <span>R$</span>
          <h5>{price.toFixed(2)}</h5>
        </Value>
       
        <Input>
          <button><Minus size={14}/></button>          
          <input type="number" min={1} step={1} />
          <button><Plus size={14}/></button>          
        </Input>
        <Cart>
          <span><ShoppingCart size={22} weight='fill'/></span>
        </Cart>        
      </CardContent>
    </Cards>
  )
}