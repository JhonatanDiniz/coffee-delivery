import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Baloo 2", sans-serif;
  }
  
  :focus{
    outline: none;
  }
`

