import styled from "styled-components";

export const ContainerHome = styled.div`
  h1{
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3.5rem;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`