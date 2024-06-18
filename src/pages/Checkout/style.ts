import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2.5rem;
`
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`
export const SectionOne = styled.div`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 60%;
`

export const SectionTwo = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40%;
`

export const FormEndereco = styled.div`
  background-color: ${(props)=>props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const FormEnderecoHeader = styled.div`
  p{
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }
  span{
    font-size: 0.875rem;
    margin-left: 1.3rem;
    margin-bottom: 2rem;
  }
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`
const SIZE_INPUTS = {
  xg: '100%',
  g: '60%',
  md: '40%',
  p: '20%'
} as const

interface SizeProps{
  sizeInputs: keyof typeof SIZE_INPUTS
}

export const Input = styled.input<SizeProps>`
  width: ${(props)=> SIZE_INPUTS[props.sizeInputs]};
  height: 2.625rem;
  border-radius: 4px;
  background-color: ${(props)=>props.theme['base-input']};
  border:none;
  padding: 0.75rem;
  color: ${(props)=>props.theme['base-label']};
  font-size: 0.875rem;
`

export const PagamentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props)=>props.theme['base-card']};
  border-radius: 6px;
`

export const PagamentoHeader = styled.div`
  p{
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }
  span{
    font-size: 0.875rem;
    margin-left: 1.3rem;
    margin-bottom: 2rem;
  }
`

export const FormaPagamentoContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 0.75rem;
`

export const Carrinho = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CarrinhoContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props)=>props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;  
  button{
    border: none;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['white']};
    padding: 1rem;
    border-radius: 6px;
    width: 100%;
  }
`

export const Itens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  hr{
    color: ${(props) => props.theme['base-button']};
  }

`

export const CarrinhoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  margin-bottom: 1.5rem;

  span{
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const AddRemove = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 1rem;

  button{
    padding: 0.5rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}
`

export const Detalhe = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`