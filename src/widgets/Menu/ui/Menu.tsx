import { menuItems } from "../lib/menu";
import { SContent, SMenu, SMenuItem, SMenuItemLink, SModePvp, SPopover } from "./menu.styles";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ModePvpIcon, PvpThisFriendIcon } from "@shared/assets";
import { routes } from "@shared/config";

export const Menu = () => {
  const [isPvpOpen, setIsPvpOpen] = useState(false);
  const { pathname } = useLocation();

  const handleOpenChange = (open: boolean) => {
    setIsPvpOpen(open);
  };

  const handleClose = () => setIsPvpOpen(false);

  return (
    <SMenu>
      {menuItems.map(({ Icon, path, label, key }) => {
        const selected = pathname === path;

        if (key !== "pvp") {
          return (
            <SMenuItemLink key={key} $selected={selected} to={path}>
              <Icon />
              <div>{label}</div>
            </SMenuItemLink>
          );
        }

        return (
          <SPopover
            key={key}
            trigger="click"
            open={isPvpOpen}
            onOpenChange={handleOpenChange}
            content={
              <SContent>
                <SModePvp to={routes.pvp} onClick={handleClose}>
                  <span>Режим PVP</span>
                  <ModePvpIcon />
                </SModePvp>
                <SModePvp to={routes.createPvp} onClick={handleClose}>
                  <span>С друзьями</span>
                  <PvpThisFriendIcon />
                </SModePvp>
              </SContent>
            }
          >
            <SMenuItem>
              <Icon />
              <div>{label}</div>
            </SMenuItem>
          </SPopover>
        );
      })}
    </SMenu>
  );
};
