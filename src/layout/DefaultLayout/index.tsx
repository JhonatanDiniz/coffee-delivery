import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Content } from "./style";

export function DefaultLayout() {
  return(
    <Content>
      <Header/>
      <Outlet/>
    </Content>
  )
}