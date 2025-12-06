import { Menu } from "@widgets/Menu";
import { Outlet } from "react-router-dom";

import { SFixedContent, SLayout } from "./layout.styles";
import { Header } from "@widgets/Header";

export const Layout = () => {
  return (
    <SLayout>
      <SFixedContent>
        <Header />
        <div id="header-actions" />
      </SFixedContent>

      <Menu />
      <Outlet />
    </SLayout>
  );
};
