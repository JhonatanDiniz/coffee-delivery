import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "@phosphor-icons/react/dist/ssr";
import { AddRemove, Carrinho, CarrinhoContainer, CarrinhoContent, Container, Content, Detalhe, Form, FormaPagamento, FormaPagamentoContainer, Input, InputQtd, Itens, PagamentoContainer, Row1, Row2 } from "./style";
import expresso from '../../assets/Expresso.svg'
import { useEffect, useState } from "react";

export function Checkout() {
  const [quantidade, setQuantidade] = useState(1)
  const price = 9.9
  const [valor, setValor] = useState(price)

  useEffect(() => {
    setValor(price * quantidade)   
  }, [quantidade, price])
  
  function handleAddQuantidade(){
    setQuantidade(quantidade + 1)
    console.log(price)
  }

  function handleRemoveQuantidade(){
    if(quantidade > 0){
      setQuantidade(quantidade - 1)
    }
  }
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
            <CarrinhoContent>
              <img src={expresso} alt="" />
              <div>
                <span>Expresso Tradicional</span>
                <AddRemove>
                  <InputQtd>
                    <button onClick={handleRemoveQuantidade}><Minus size={14}/></button>          
                    <span>{quantidade}</span>
                    <button onClick={handleAddQuantidade}><Plus size={14}/></button>          
                  </InputQtd>
                  <button><Trash color="#8047F8" size={22}/> Remover</button>
                </AddRemove>
              </div>
              <h4>R$ {valor.toFixed(2)} </h4>
            </CarrinhoContent>
            <hr />
            <CarrinhoContent>
              <img src={expresso} alt="" />
              <div>
                <span>Expresso Tradicional</span>
                <AddRemove>
                  <InputQtd>
                    <button onClick={handleRemoveQuantidade}><Minus size={14}/></button>          
                    <span>{quantidade}</span>
                    <button onClick={handleAddQuantidade}><Plus size={14}/></button>          
                  </InputQtd>
                  <button><Trash color="#8047F8" size={22}/> Remover</button>
                </AddRemove>
              </div>
              <h4>R$ {valor.toFixed(2)} </h4>
            </CarrinhoContent>

          </Itens>
        
        
          <Detalhe>
            <p>Total de itens</p>
            <p>R$ 29.70</p>
          </Detalhe>
          <Detalhe>
            <p>Entrega</p>
            <p>R$ 3.50</p>
          </Detalhe>
          <Detalhe>
            <h3>Total</h3>
            <h3>R$ 33.20</h3>
          </Detalhe>
          <button>CONFIRMAR PEDIDO</button>
        </CarrinhoContainer>
      </Carrinho>
    </Container>
  )
}