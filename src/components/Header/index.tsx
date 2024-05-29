import { Cart, Container, HeaderContainer, Location } from "./style";

import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react/dist/ssr";

export function Header() {
  return(
    <HeaderContainer>
      <img src={Logo} alt="" />
      <Container>
        <Location>
          <MapPin size={22} weight="fill" /> 
          Guará, DF
        </Location>
        <Cart>
          <ShoppingCart size={22} weight="fill"/>
        </Cart>
      </Container>
    </HeaderContainer>
  )
}