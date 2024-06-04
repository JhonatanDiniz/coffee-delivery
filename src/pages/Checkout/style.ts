import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 2.5rem auto;
  justify-content: space-between;

  h1{
    margin-bottom: 1rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1rem;
  border-radius: 6px;
  background-color: ${(props)=>props.theme['base-card']};
  p{
    font-size: 1rem;
    font-weight: bold;
  }
  span{
    font-size: 0.875rem;
    margin-left: 1.3rem;
  }
`
export const Row1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 21.75rem;
  gap: 0.75rem;
`

export const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3.75rem;
  gap: 0.75rem;
`

export const Input = styled.input`
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
  justify-content: space-between;
  span{
    font-size: 0.75rem;
  }
`

export const FormaPagamento = styled.span`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background-color: ${(props)=>props.theme['base-button']};
  border-radius: 6px;
  color: ${(props)=>props.theme['base-text']}; 
  cursor: pointer;

  &&:hover{
    background-color: ${(props)=>props.theme['purple-light']};
    border: 1px solid ${(props)=>props.theme['purple']};
  }
`