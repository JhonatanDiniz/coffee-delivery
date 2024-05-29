import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { Cards, ContainerHome } from "./style";

export function Home() {
  return(
    <ContainerHome>
      <Banner/>
      <h1>Nossos Cafés</h1>
      <Cards>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Cards>
    </ContainerHome>
  )
}