import { Minus, Plus } from "@phosphor-icons/react/dist/ssr";
import { Input } from "./style";
import { useContext, useState } from "react";
import { Product, ProductsContext } from "../../context/ProductsContext";

interface CounterProduct{
  counterProduct: Product
}

export function Counter({ counterProduct } : CounterProduct){
  const [quantidade, setQuantidade] = useState(counterProduct.quantidade)
  const { addQuantidade, removeQuantidade, addQuantidadeCarrinho, removeQuantidadeCarrinho } = useContext(ProductsContext)

  function handleAddQuantidade(){
    if(counterProduct.id){
      setQuantidade(quantidade + 1)
      addQuantidade(counterProduct.id)
      addQuantidadeCarrinho(counterProduct.id)
    }
  }

  function handleRemoveQuantidade(){
    if(counterProduct.id){
      setQuantidade(quantidade > 0 ? quantidade - 1 : quantidade)
      removeQuantidade(counterProduct.id)
      removeQuantidadeCarrinho(counterProduct.id)
    }
  }

  return(
    <Input>
      <button onClick={handleRemoveQuantidade}><Minus size={14}/></button>          
      <span>{quantidade}</span>
      <button onClick={handleAddQuantidade}><Plus size={14}/></button>          
    </Input>
  )
}