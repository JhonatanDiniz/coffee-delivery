import { createContext } from "react";
import expresso from '../assets/Expresso.svg'
import americano from '../assets/Americano.svg'
import expressoCremoso from '../assets/Expresso-Cremoso.svg'
import expressoGelado from '../assets/Cafe-Gelado.svg'
import cafeComLeite from '../assets/Cafe-com-Leite.svg'
import latte from '../assets/Latte.svg'
import capuccino from '../assets/Capuccino.svg'
import macchiato from '../assets/Macchiato.svg'
import mochaccino from '../assets/Mochaccino.svg'
import chocolateQuente from '../assets/Chocolate-Quente.svg'
import cubano from '../assets/Cubano.svg'
import havaiano from '../assets/Havaiano.svg'
import arabe from '../assets/Arabe.svg'
import irlandes from '../assets/Irlandês.svg'

export interface Product{
  id?: number,
  name: string
  description: string
  price: number
  image: string
}

const productList: Product[]= [
  {
    id: 1,
    name: "Café Expresso",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
    image: expresso
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
    image: americano
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
    image: expressoCremoso
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
    image: expressoGelado
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
    image: cafeComLeite
  },
  {
    id: 6,
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
    image: latte
  },
  {
    id: 7,
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
    image: capuccino
  },
  {
    id: 8,
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
    image: macchiato
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
    image: mochaccino
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90,
    image: chocolateQuente
  },
  {
    id: 11,
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
    image: cubano
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
    image: havaiano
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
    image: arabe
  },
  {
    id: 14,
    name: "Irlândes",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
    image: irlandes
  },
]
 

export const ProductsContext = createContext({
  products: productList,
})

