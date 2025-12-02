import { LayerIcon, PvpIcon, RocketIcon, ShopIcon } from "@shared/assets";

import type { IMenu } from "../model/menu.types";

export const menuItems: IMenu[] = [
  { path: "/solo", Icon: RocketIcon, label: "Соло" },
  { path: "/inventory", Icon: LayerIcon, label: "Инвентарь" },
  { path: "/pvp", Icon: PvpIcon, label: "" },
  { path: "/shop", Icon: ShopIcon, label: "Магазин" },
  { path: "/profile", Icon: ShopIcon, label: "Профиль" },
];
