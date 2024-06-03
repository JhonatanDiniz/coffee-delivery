import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { Cards, ContainerHome } from "./style";

export function Home() {
  const { products } = useContext(ProductsContext)

  return(
    <ContainerHome>
      <Banner/>
      <h1>Nossos Cafés</h1>
      <Cards>
        {products.map((product)=> 
          <Card 
            key={product.id} 
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />)        
        }
      </Cards>
    </ContainerHome>
  )
}