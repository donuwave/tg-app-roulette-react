import { menuItems } from "../lib/menu";

import { SMenu, SMenuItem } from "./menu.styles";
import { useLocation } from "react-router-dom";

export const Menu = () => {
  const { pathname } = useLocation();

  return (
    <SMenu>
      {menuItems.map(({ Icon, path, label }) => {
        const selected = pathname === path;

        return (
          <SMenuItem $selected={selected} to={path} key={path}>
            <Icon />
            <div>{label}</div>
          </SMenuItem>
        );
      })}
    </SMenu>
  );
};
