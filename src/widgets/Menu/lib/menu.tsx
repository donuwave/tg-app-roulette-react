import { LayerIcon, PvpIcon, RocketIcon, ShopIcon } from "@shared/assets";

import type { IMenu } from "../model/menu.types";
import { routes } from "@shared/config";
import { SAvatar } from "../ui/menu.styles";

export const menuItems: IMenu[] = [
  { key: "solo", path: routes.solo, Icon: RocketIcon, label: "Соло" },
  { key: "inventory", path: routes.inventory, Icon: LayerIcon, label: "Инвентарь" },
  { key: "pvp", path: "", Icon: PvpIcon, label: "" },
  { key: "shop", path: routes.shop, Icon: ShopIcon, label: "Магазин" },
  {
    key: "profile",
    path: routes.profile,
    Icon: () => (
      <SAvatar>
        <img src="/profile.png" alt="" />
      </SAvatar>
    ),
    label: "Профиль",
  },
];
