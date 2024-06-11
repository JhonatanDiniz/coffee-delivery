import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react/dist/ssr";
import { AddRemove, Carrinho, CarrinhoContainer, CarrinhoContent, Container, Content, Detalhe, Form, FormaPagamento, FormaPagamentoContainer, Input, Itens, PagamentoContainer, Row1, Row2 } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Counter } from "../../components/Counter";

export function Checkout() {
  const {carrinho} = useContext(ProductsContext)
  const calculateTotal = () =>{
    return carrinho.reduce((total, product)=> total + product.quantidade * 9.9, 0)
  }

  const total = calculateTotal()

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


      <Carrinho>
        <h1>Cafés Selecionados</h1>
        <CarrinhoContainer>
          <Itens>

            {carrinho.map((product) =>
              <CarrinhoContent key={product.id}>
              <img src={product.image} alt="" />
              <div>
                <span>{product.name}</span>
                <AddRemove>
                  <Counter counterProduct={product}/>
                  <button><Trash color="#8047F8" size={22}/> Remover</button>
                </AddRemove>
              </div>
              <h4>R$ {product.price?.toFixed(2)}</h4>
            </CarrinhoContent>                        
            )}
          </Itens>
        
        
          <Detalhe>
            <p>Total de itens</p>
            <p>R$ {total.toFixed(2)}</p>
          </Detalhe>
          <Detalhe>
            <p>Entrega</p>
            <p>R$ 3.50</p>
          </Detalhe>
          <Detalhe>
            <h3>Total</h3>
            <h3>R$ {(total + 3.50).toFixed(2)}</h3>
          </Detalhe>
          <button>CONFIRMAR PEDIDO</button>
        </CarrinhoContainer>
      </Carrinho>
    </Container>
  )
}