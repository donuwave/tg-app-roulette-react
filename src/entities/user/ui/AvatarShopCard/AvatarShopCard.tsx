import { SAvatarBg, SAvatarPick, SPrice, SText, SChoice, STag } from "./avatarShopCard.styles.ts";
import { PlusIcon } from "@shared/assets";
import type { FC } from "react";

export const AvatarShopCard: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <SAvatarPick>
      <SChoice onClick={onClick} icon={<PlusIcon />} />
      <STag>🔥NEW</STag>

      <SAvatarBg>
        <img src="/avatar.png" alt="" />
      </SAvatarBg>
      <SText>Avatar</SText>
      <SPrice>45.2 TON</SPrice>
    </SAvatarPick>
  );
};
