import { ReactNode, createContext, useReducer, useState } from "react";
import { Products } from "../../data.json"
import { Product, ProductsReducer, valueInicial } from "../reducers/products/reducer";
import { addQuantityAction, removeQuantityAction } from "../reducers/products/actions";

export interface PaymentMethodProps{
  id: number
  description: string
}

export interface Order{
  Endereco:{
    cep: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string, 
    cidade: string,
    uf: string
  },
  produtos: Product[],
  pagamento: PaymentMethodProps | null
  totalOrder: number | null
}


interface ProductContextType{
  products: Product[]
  carrinho: Product[]
  formPayment: PaymentMethodProps | null
  totalOrder: number
  totalProduct: number
  addItem: (product: Product) => void
  removeItem: (product: Product) => void
  addQuantidade: (id: number) => void
  removeQuantidade: (id: number) => void
  addQuantidadeCarrinho: (id: number) => void
  removeQuantidadeCarrinho: (id: number) => void
  submitProduct: (data: any) => void
  payment: (payment: PaymentMethodProps) => void
  
}

export const ProductsContext = createContext({} as ProductContextType)

interface ProductsContextProviderProps{
  children: ReactNode
}

export function ProductsContextProvider({ children } : ProductsContextProviderProps) {
  const [formPayment, setFormPayment] = useState<PaymentMethodProps | null>(null)
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

  function payment(payment: PaymentMethodProps){
    setFormPayment(payment)
    console.log(payment)
  }

  const calculateTotal = () =>{
    return carrinho.reduce((total, product)=> total + product.quantidade * 9.9, 0)
  }

  const txEntrega = 3.5

  const totalProduct = calculateTotal()

  const totalOrder = totalProduct + txEntrega

  function submitProduct(data: any){
    const order: Order = {
      Endereco: {
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf
      },
      produtos: carrinho,
      pagamento: formPayment,
      totalOrder: Number(totalOrder.toFixed(2))
    }
    
    console.log(order)
  }

  return(
    <ProductsContext.Provider value={{
      products,
      carrinho,
      formPayment,
      totalOrder,
      totalProduct,
      addItem,
      removeItem,
      addQuantidade,
      removeQuantidade,
      addQuantidadeCarrinho,
      removeQuantidadeCarrinho,
      submitProduct,
      payment
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

