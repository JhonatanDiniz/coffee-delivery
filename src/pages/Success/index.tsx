import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Container, Detail, Header, Icon, Item } from "./style";
import Ilustration from "../../assets/Illustration.svg"
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

export function Success(){
  const { pedido } = useContext(ProductsContext)

  return(
    <Container>
      <div>
        <Header>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Header>
        <Detail>
          <Item>
            <Icon bcolor="purple"><MapPin weight="fill"  size={22}/></Icon>
            <div>
              <p>Entrega em <strong>{pedido.Endereco.rua} - {pedido.Endereco.numero}</strong> {pedido.Endereco.bairro} {pedido.Endereco.cidade} {pedido.Endereco.uf}</p>            
            </div>
          </Item>
          <Item>
            <Icon bcolor="yellow"><Timer weight="fill" size={22}/></Icon>
            <div>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min</strong></p>
            </div>
          </Item>
          <Item>
            <Icon bcolor="yellowDark"><CurrencyDollar weight="fill" size={22}/></Icon>
            <div>
              <p>Pagamento na entrega</p>
              <p><strong>{pedido.pagamento?.description}</strong></p>
            </div>
          </Item>
        </Detail>
      </div>
      <div>
        <img src={Ilustration} alt="" />
      </div>
    </Container>
  )
}