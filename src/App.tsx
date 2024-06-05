import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ProductsContextProvider } from "./context/ProductsContext"



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <ProductsContextProvider>
        <GlobalStyle/>
        <Router/>
      </ProductsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
