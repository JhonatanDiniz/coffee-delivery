import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react/dist/ssr";
import { AddRemove, CarrinhoContainer, CarrinhoContent, Container, Detalhe, Form, FormEndereco, FormEnderecoHeader, FormaPagamento, FormaPagamentoContainer, Input, Inputs, Itens, PagamentoContainer, PagamentoHeader, SectionOne, SectionTwo} from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Counter } from "../../components/Counter";
import { Product } from "../../reducers/products/reducer";
import { useForm } from "react-hook-form";

export function Checkout() {
  const {carrinho, removeItem} = useContext(ProductsContext)
  const { register, handleSubmit } = useForm()

  const calculateTotal = () =>{
    return carrinho.reduce((total, product)=> total + product.quantidade * 9.9, 0)
  }

  const total = calculateTotal()

  function handleSubmitProduct(data: any){
    console.log(data)
  }

  function handleRemoveItem(product: Product){
    removeItem(product)
  }

  return(
   <Container>
    <Form action="">
      <SectionOne>
        <h4>Complete seu pedido</h4>
        <FormEndereco>
          <FormEnderecoHeader>
            <p><MapPinLine size={22} color="#C47F17"/>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </FormEnderecoHeader>
          <Inputs>
            <div>
              <Input sizeInputs="md"
                type="text"
                placeholder="Cep"
                {...register('cep')}
              />
            </div>
            <div>
              <Input sizeInputs="xg"
                type="text"
                placeholder="Rua"
                {...register('rua')}
              />
            </div>
            <div style={{display: 'flex', gap: '0.75rem'}}>
              <Input sizeInputs="md"
                type="text"
                placeholder="Número"
                {...register('numero')}
              />
              <Input sizeInputs="g"
                type="text"
                placeholder="Complemento"
                {...register('complemento')}
              />
            </div>
            <div style={{display: 'flex', gap: '0.75rem'}}>
              <Input sizeInputs="md"
                type="text"
                placeholder="Bairro"
                {...register('bairro')}
              />
              <Input sizeInputs="md"
                type="text"
                placeholder="Cidade"
                {...register('cidade')}
              />
              <Input sizeInputs="p"
                type="text"
                placeholder="UF"
                {...register('uf')}
              />
            </div>
          </Inputs>
        </FormEndereco>
        <PagamentoContainer>
          <PagamentoHeader>
            <p><CurrencyDollar size={22}/>Pagamento</p>
            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          </PagamentoHeader>
          <FormaPagamentoContainer>
            <FormaPagamento type="button"><CreditCard size={22} color="#8047F8"/> CARTÃO DE CRÉDITO</FormaPagamento>
            <FormaPagamento type="button"><Bank size={22} color="#8047F8"/> CARTÃO DE DÉBITO</FormaPagamento>
            <FormaPagamento type="button"><Money size={22} color="#8047F8"/> DINHEIRO</FormaPagamento>
          </FormaPagamentoContainer>
        </PagamentoContainer>
      </SectionOne>
      <SectionTwo>
        <h4>Cafés Selecionados</h4>
        <CarrinhoContainer>
          <Itens>

            {carrinho.map((product) =>
              <CarrinhoContent key={product.id}>
              <img src={product.image} alt="" />
              <div>
                <span>{product.name}</span>
                <AddRemove>
                  <Counter counterProduct={product}/>
                  <button type="button"  onClick={()=>handleRemoveItem(product)}><Trash color="#8047F8" size={22}/> Remover</button>
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
          <button type="submit" onSubmit={handleSubmitProduct}>CONFIRMAR PEDIDO</button>
        </CarrinhoContainer>
      </SectionTwo>
    </Form>
   </Container>
  )
}