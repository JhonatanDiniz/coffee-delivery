import { BackgroundColor, Container, Description, Descriptions, Titles } from "./style";

import imgBanner from '../../../../assets/Imagem-Banner.svg'
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react/dist/ssr";

export function Banner() {
  return(
    <Container>
      <div>
        <Titles>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
        </Titles>
        <Descriptions>
          <Description>
            <BackgroundColor $bcolor="yellowDark" >
              <span><ShoppingCart /></span>
            </BackgroundColor>            
            <span>Compra simples e segura</span>
          </Description>

          <Description>
            <BackgroundColor $bcolor="baseText">
              <span><Package weight="fill"/></span>
            </BackgroundColor>  
            <span>Compra simples e segura</span>
          </Description>

          <Description>
            <BackgroundColor $bcolor="yellow">
              <span><Timer weight="fill"/></span>
            </BackgroundColor>  
            <span>Compra simples e segura</span>
          </Description>

          <Description>
            <BackgroundColor $bcolor="purple">
              <span><Coffee weight="fill"/></span>
            </BackgroundColor>  
            <span>Compra simples e segura</span>
          </Description>
        </Descriptions>
      </div>
      <div>
        <img src={imgBanner} alt="" />
      </div>
    </Container>
  )
}