import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react/dist/ssr";
import { Container, Content, Form, FormaPagamento, FormaPagamentoContainer, Input, PagamentoContainer, Row1, Row2 } from "./style";

export function Checkout() {
  return(
    <Container>
      <Content>
        <h1>Complete seu pedido</h1>
        <Form>
          <p><MapPinLine color="#C47F17" size={22}/> Endereço da Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
          <div>
            <Input type="text" placeholder="Cep" />
          </div>
          <Input type="text" placeholder="Rua" />
          <Row1>
            <Input type="text" placeholder="Número" />
            <Input type="text" placeholder="Complemento" />
          </Row1>
          <Row2>
            <Input type="text" placeholder="Bairro" />
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="UF" />
          </Row2>
        </Form>
        <PagamentoContainer>
          <p><CurrencyDollar color="#8047F8"/> Pagamento</p>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          <FormaPagamentoContainer>
            <FormaPagamento>
              <CreditCard color="#8047F8" size={22}/> 
              CARTÃO DE CRÉDITO
            </FormaPagamento>
            <FormaPagamento>
              <Bank color="#8047F8" size={22}/> 
              CARTÃO DE DÉBITO
            </FormaPagamento>
            <FormaPagamento>
              <Money color="#8047F8" size={22}/> 
              DINHEIRO
            </FormaPagamento>
          </FormaPagamentoContainer>
        </PagamentoContainer>
      </Content>
      <div>
        carrinho
      </div>
    </Container>
  )
}