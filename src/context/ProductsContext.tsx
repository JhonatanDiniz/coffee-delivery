import { ReactNode, createContext, useReducer, useState } from "react";
import { Products } from "../../data.json"
import { Product, ProductsReducer, valueInicial } from "../reducers/products/reducer";
import { addQuantityAction, removeQuantityAction } from "../reducers/products/actions";



interface ProductContextType{
  products: Product[]
  carrinho: Product[]
  addItem: (product: Product) => void
  removeItem: (product: Product) => void
  addQuantidade: (id: number) => void
  removeQuantidade: (id: number) => void
  addQuantidadeCarrinho: (id: number) => void
  removeQuantidadeCarrinho: (id: number) => void
  
}

export const ProductsContext = createContext({} as ProductContextType)

interface ProductsContextProviderProps{
  children: ReactNode
}

export function ProductsContextProvider({ children } : ProductsContextProviderProps) {
  const [products, dispatch] = useReducer(ProductsReducer, Products)

  const [carrinho, setCarrinho] = useState<Product[]>([])

  function addQuantidade(id: number){
    dispatch(addQuantityAction(id))
  }

  function removeQuantidade(id: number){
    dispatch(removeQuantityAction(id))
  }

  function addQuantidadeCarrinho(id: number){
    setCarrinho(carrinho.map((prod) =>{
      if(prod.id === id){
        return {...prod, quantidade: prod.quantidade + 1, price: valueInicial * (prod.quantidade + 1)}
      }
      return prod
    }))
  }

  function removeQuantidadeCarrinho(id: number){
    setCarrinho(carrinho.map((prod) =>{
      if(prod.id === id){
        return {...prod, quantidade: prod.quantidade - 1, price: valueInicial * (prod.quantidade - 1)}
      }
      return prod
    }))
  }

  function addItem(product: Product){
    setCarrinho((prevCarrinho)=>{
      const prodExistente = prevCarrinho.find((prod) => prod.id === product.id)

      if(prodExistente){
        addQuantidadeCarrinho(product.id ?? 0)
        console.log('Passei aqui')
        return prevCarrinho
      }
      return [...prevCarrinho, {...product}]
    })
  }

  function removeItem(product: Product){
    setCarrinho((prevCarrinho)=> {
      return prevCarrinho.filter((prod)=> prod.id !== product.id)
    })
  }

  return(
    <ProductsContext.Provider value={{
      products,
      carrinho,
      addItem,
      removeItem,
      addQuantidade,
      removeQuantidade,
      addQuantidadeCarrinho,
      removeQuantidadeCarrinho
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

