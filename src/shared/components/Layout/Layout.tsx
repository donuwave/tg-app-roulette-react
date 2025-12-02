import type { FC, PropsWithChildren } from "react";

import { Menu } from "@widgets/Menu";

import { SLayout } from "./layout.styles";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SLayout>
      <Menu />
      {children}
    </SLayout>
  );
};
