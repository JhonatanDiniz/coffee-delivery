import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
`

export const Location = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-light']};
  padding: 0.625rem;
  border-radius: 6px;
  color: ${(props) => props.theme['purple-dark']};
`

export const Cart = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.625rem;
  border-radius: 6px;
`