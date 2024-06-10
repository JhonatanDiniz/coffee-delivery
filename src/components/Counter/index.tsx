import { Minus, Plus } from "@phosphor-icons/react/dist/ssr";
import { Input } from "./style";
import { useContext, useState } from "react";
import { Product, ProductsContext } from "../../context/ProductsContext";

interface CounterProduct{
  counterProduct: Product
}

export function Counter({ counterProduct } : CounterProduct){
  const [quantidade, setQuantidade] = useState(counterProduct.quantidade)
  const { addQuantidade, removeQuantidade } = useContext(ProductsContext)

  function handleAddQuantidade(){
    counterProduct.id ? setQuantidade(quantidade + 1) : null
    addQuantidade(counterProduct.id ?? 0)
  }

  function handleRemoveQuantidade(){
    counterProduct.id ? setQuantidade( quantidade > 0 ? quantidade - 1 : quantidade) : null
    removeQuantidade(counterProduct.id ?? 0)
    console.log(counterProduct)
  }

  return(
    <Input>
      <button onClick={handleRemoveQuantidade}><Minus size={14}/></button>          
      <span>{quantidade}</span>
      <button onClick={handleAddQuantidade}><Plus size={14}/></button>          
    </Input>
  )
}