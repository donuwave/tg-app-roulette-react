import { menuItems } from "../lib/menu";

import { SMenu, SMenuItem } from "./menu.styles";

export const Menu = () => {
  return (
    <SMenu>
      {menuItems.map(({ Icon, path, label }) => (
        <SMenuItem key={path}>
          <Icon />
          <div>{label}</div>
        </SMenuItem>
      ))}
    </SMenu>
  );
};
