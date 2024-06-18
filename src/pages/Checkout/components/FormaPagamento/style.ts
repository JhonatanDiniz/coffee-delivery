import styled from "styled-components";

export const FormaPagamento = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: none;
  background-color: ${(props)=>props.theme['base-button']};
  border-radius: 6px;
  color: ${(props)=>props.theme['base-text']}; 
  cursor: pointer;

  &&:hover{
    background-color: ${(props)=>props.theme['purple-light']};
    border: 1px solid ${(props)=>props.theme['purple']};
  }
`