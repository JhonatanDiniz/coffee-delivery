import { ReactNode, createContext, useState } from "react";
import { Products } from "../../data.json"

export interface Product{
  id?: number,
  name: string
  description: string
  price?: number
  image: string
  quantidade: number
}

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
  const [products, setProducts] = useState<Product[]>(Products)

  const [carrinho, setCarrinho] = useState<Product[]>([])

  const valueInicial = 9.9


  function addQuantidade(id: number){
    setProducts(products.map((prod) =>{
      if(prod.id === id){
        return {...prod, quantidade: prod.quantidade + 1, price: valueInicial * (prod.quantidade + 1)}
      }
      return prod
    }))
  }

  function removeQuantidade(id: number){
    setProducts(products.map((prod) =>{
      if(prod.id === id){
        return {...prod, quantidade: prod.quantidade - 1, price: valueInicial * (prod.quantidade - 1)}
      }
      return prod
    }))
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

