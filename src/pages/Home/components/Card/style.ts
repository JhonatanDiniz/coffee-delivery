import styled from "styled-components";

export const Cards = styled.div`
  width: 16rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.5rem;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -3rem;

  img{
    margin-bottom: 0.75rem;
  }

  h6{
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  > span{
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-bottom: 2rem;
  }
`

export const Flavors = styled.span`
  color: ${(props) => props.theme['yellow-dark']} !important;
  padding: 0.25rem 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  margin-bottom: 1rem;
  font-size: 0.625rem;
`

export const CardContent = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Value = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  h5{
    font-size: 1.5rem;
    font-weight: bold;
  }
`
export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  cursor: pointer;
`
