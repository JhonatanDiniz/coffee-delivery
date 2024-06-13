import { ActionTypes } from "./actions"

export interface Product{
  id?: number,
  name: string
  description: string
  price?: number
  image: string
  quantidade: number
}

export const valueInicial = 9.9

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ProductsReducer(state: Product[], action: any){
 
  switch(action.type){
    case ActionTypes.ADD_QUANTITY:
      return state.map((product)=> {
        if(product.id === action.payload.id){
          return{ ...product, quantidade: product.quantidade + 1, price: valueInicial * (product.quantidade + 1) }
        }
        return product
      })

    case ActionTypes.REMOVE_QUANTITY:
      return state.map((product)=> {
        if(product.id === action.payload.id){
          return{ ...product, quantidade: product.quantidade - 1, price: valueInicial * (product.quantidade - 1) }
        }
        return product
      })
  }
  return state

}