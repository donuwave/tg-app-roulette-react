import { LayerIcon, PvpIcon, RocketIcon, ShopIcon } from "@shared/assets";

import type { IMenu } from "../model/menu.types";
import { routes } from "@shared/config";

export const menuItems: IMenu[] = [
  { path: routes.solo, Icon: RocketIcon, label: "Соло" },
  { path: routes.inventory, Icon: LayerIcon, label: "Инвентарь" },
  { path: routes.pvp, Icon: PvpIcon, label: "" },
  { path: routes.shop, Icon: ShopIcon, label: "Магазин" },
  { path: routes.profile, Icon: ShopIcon, label: "Профиль" },
];
