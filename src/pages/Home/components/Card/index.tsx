import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react/dist/ssr'
import expresso from '../../../../assets/Expresso.svg'
import { CardContent, CardHeader, Cards, Cart, Flavors, Input, Value } from './style'

export function Card() {
  return(
    <Cards>
      <CardHeader>
        <img src={expresso} alt="" />
        <Flavors>Tradicional</Flavors>
        <h6>Expresso Tradicional</h6>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </CardHeader>
      <CardContent>
        <Value>
          <span>R$</span>
          <h5>9,90</h5>
        </Value>
       
        <Input>
          <button><Plus size={14}/></button>
          <input type="number" min={1} step={1} />
          <button><Minus size={14}/></button>
        </Input>
        <Cart>
          <span><ShoppingCart size={22} weight='fill'/></span>
        </Cart>        
      </CardContent>
    </Cards>
  )
}