import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  padding: 5rem;
`

export const Header = styled.div`
 h1{
  color: ${(props)=> props.theme['yellow-dark']};
 }
`

export const Detail = styled.div`
   border: 1px solid ${(props)=> props.theme['purple-dark']};
   padding: 2.5rem;
   margin-top: 2.5rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;  
   border-radius: 6px 36px 6px 36px;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const BACKGROUND_COLOR = {
  purple: 'purple',
  yellow: 'yellow',
  yellowDark:'yellow-dark',
} as const

interface BackgroundProps{
  bcolor: keyof typeof BACKGROUND_COLOR
}

export const Icon = styled.div<BackgroundProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.theme['white']};
  background-color: ${(props)=> props.theme[BACKGROUND_COLOR[props.bcolor]]};
`