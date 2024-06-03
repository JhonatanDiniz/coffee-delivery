import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react/dist/ssr'
import { CardContent, CardHeader, Cards, Cart, Flavors, Input, Value } from './style'
import { Product } from '../../../../context/ProductsContext'
import { useEffect, useState } from 'react'

export function Card({ name, description, price, image } : Product) {
  const [quantidade, setQuantidade] = useState(1)
  const [valor, setValor] = useState(price)

  useEffect(() => {
    setValor(price * quantidade)   
  }, [quantidade, price])
  
  function handleAddQuantidade(){
    setQuantidade(quantidade + 1)
  }

  function handleRemoveQuantidade(){
    if(quantidade > 0){
      setQuantidade(quantidade - 1)
    }
  }

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
          <h5>{valor.toFixed(2)}</h5>
        </Value>
       
        <Input>
          <button onClick={handleRemoveQuantidade}><Minus size={14}/></button>          
          <span>{quantidade}</span>
          <button onClick={handleAddQuantidade}><Plus size={14}/></button>          
        </Input>
        <Cart>
          <span><ShoppingCart size={22} weight='fill'/></span>
        </Cart>        
      </CardContent>
    </Cards>
  )
}