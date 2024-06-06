import { Minus, Plus } from "@phosphor-icons/react/dist/ssr";
import { Input } from "./style";
import { useState } from "react";
import { Product } from "../../context/ProductsContext";

interface CounterProduct{
  counterProduct: Product
}

export function Counter({ counterProduct } : CounterProduct){
  const [quantidade, setQuantidade] = useState(counterProduct.quantidade ?? 0)

  function handleAddQuantidade(){
    counterProduct.id ? setQuantidade(quantidade + 1) : null
  }

  function handleRemoveQuantidade(){
    counterProduct.id ? setQuantidade( quantidade > 0 ? quantidade - 1 : quantidade) : null
  }

  return(
    <Input>
      <button onClick={handleRemoveQuantidade}><Minus size={14}/></button>          
      <span>{quantidade}</span>
      <button onClick={handleAddQuantidade}><Plus size={14}/></button>          
    </Input>
  )
}