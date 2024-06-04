import { Cart, Container, HeaderContainer, Location } from "./style";

import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import { NavLink } from "react-router-dom";

export function Header() {
  return(
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <Container>
        <Location>
          <MapPin size={22} weight="fill" /> 
          Guará, DF
        </Location>
        <Cart>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" color="#C47F17"/>
          </NavLink>
        </Cart>
      </Container>
    </HeaderContainer>
  )
}