import { CurrencyDollar, MapPinLine, Trash } from "@phosphor-icons/react/dist/ssr";
import { AddRemove, CarrinhoContainer, CarrinhoContent, Container, Detalhe, Form, FormEndereco, FormEnderecoHeader, FormaPagamentoContainer, Input, Inputs, Itens, PagamentoContainer, PagamentoHeader, SectionOne, SectionTwo} from "./style";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Counter } from "../../components/Counter";
import { Product } from "../../reducers/products/reducer";
import { useForm } from "react-hook-form";
import { Pagamento } from "./components/FormaPagamento";
import { Payments } from "../../../payment.json"

export interface PaymentMethodProps{
  id: number
  description: string
}

interface Order{
  Endereco:{
    cep: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string, 
    cidade: string,
    uf: string
  },
  produtos: Product[],
  pagamento: PaymentMethodProps | null
}

export function Checkout() {
  const [formPayment, setFormPayment] = useState<PaymentMethodProps | null>(null)
  const {carrinho, removeItem} = useContext(ProductsContext)
  const { register, handleSubmit } = useForm()

  const calculateTotal = () =>{
    return carrinho.reduce((total, product)=> total + product.quantidade * 9.9, 0)
  }

  const txEntrega = 3.5

  const totalProduct = calculateTotal()

  const totalOrder = totalProduct + txEntrega

  function handlePayment(payment: PaymentMethodProps){
    setFormPayment(payment)
    console.log(payment)
  }

  function handleSubmitProduct(data: any){
    const order: Order = {
      Endereco: {
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf
      },
      produtos: carrinho,
      pagamento: formPayment
    }
    
    console.log(order)
  }

  function handleRemoveItem(product: Product){
    removeItem(product)
  }

  return(
   <Container>
    <Form onSubmit={handleSubmit(handleSubmitProduct)} action="">
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
            {Payments.map((payment)=>(
              <Pagamento 
                key={payment.id}
                payment={payment}
                onSelect={handlePayment}           
                isSelected={payment.id === formPayment?.id}   
              />
            ))}
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
            <p>R$ {totalProduct.toFixed(2)}</p>
          </Detalhe>
          <Detalhe>
            <p>Entrega</p>
            <p>R$ 3.50</p>
          </Detalhe>
          <Detalhe>
            <h3>Total</h3>
            <h3>R$ {totalOrder.toFixed(2)}</h3>
          </Detalhe>
          <button type="submit" onSubmit={handleSubmitProduct}>CONFIRMAR PEDIDO</button>
        </CarrinhoContainer>
      </SectionTwo>
    </Form>
   </Container>
  )
}