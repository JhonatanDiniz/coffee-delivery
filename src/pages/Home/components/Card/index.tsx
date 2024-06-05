import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react/dist/ssr'
import { CardContent, CardHeader, Cards, Cart, Flavors, Input, Value } from './style'
import { Product, ProductsContext } from '../../../../context/ProductsContext'
import { useContext } from 'react'

export function Card({id, name, description, image, quantidade } : Product) {
  // const [quantidade, setQuantidade] = useState(1)
  // const [valor, setValor] = useState(price)

  // useEffect(() => {
  //   setValor(price * quantidade)   
  // }, [quantidade, price])

  const {addQuantidade, removeQuantidade} = useContext(ProductsContext)

  function handleAddQuantidade(){
    const validId = id ?? 0
    addQuantidade(validId)
  }

  function handleRemoveQuantidade() {
    const validId = id ?? 0
    removeQuantidade(validId)
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
          <h5>9.90</h5>
        </Value>
       
        <Input>
          <button onClick={handleRemoveQuantidade}><Minus size={14}/></button>          
          <span>{quantidade}</span>
          <button onClick={handleAddQuantidade} ><Plus size={14}/></button>          
        </Input>
        <Cart>
          <span><ShoppingCart size={22} weight='fill'/></span>
        </Cart>        
      </CardContent>
    </Cards>
  )
}