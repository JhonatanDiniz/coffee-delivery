import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${(props) => props.theme['base-button']};
  
  input{
    width: 2.5rem;
    border: 0;
    background-color: transparent;
    text-align: center;
    font-size: 1rem;
  }

  button{
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme['purple']};
    background-color: transparent;
  }
`