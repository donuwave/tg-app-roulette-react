import { Menu } from "@widgets/Menu";
import { Outlet } from "react-router-dom";

import { SLayout } from "./layout.styles";
import { Header } from "@widgets/Header";

export const Layout = () => {
  return (
    <SLayout>
      <Header />
      <Menu />
      <Outlet />
    </SLayout>
  );
};
