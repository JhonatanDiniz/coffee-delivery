import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 3.5rem;
  justify-content: space-between;
  margin-top: 5.875rem;
`

export const Titles = styled.section`
  margin-bottom: 4.125rem;
  h1{
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  span{
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

`

export const Descriptions = styled.div`
  max-width: 35rem;
  display: flex;
  flex: 2;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;
`

const BACKGROUND_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText:'base-text',
  purple: 'purple',
} as const

interface BackgroundProps{
  $bcolor: keyof typeof BACKGROUND_COLOR
}

export const Description = styled.div`
  display: flex;
  gap: 0.75rem;
  font-size: 1rem;
`

export const BackgroundColor = styled.div<BackgroundProps>`
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 50px;
  padding-top: 0.2rem;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme[BACKGROUND_COLOR[props.$bcolor]]};
  color: ${(propos) => propos.theme['white']}
`