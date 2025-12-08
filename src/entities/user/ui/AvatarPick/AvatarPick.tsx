import { SAvatarBg, SAvatarPick, SButton } from "./avatarPick.styles";
import type { FC } from "react";
import type { IAvatarPick } from "../../model/avatarPick.types";

export const AvatarPick: FC<IAvatarPick> = ({ active, src, id, onClick, name }) => {
  const textButton = active ? "Выбрано" : "Выбрать";

  return (
    <SAvatarPick $active={active}>
      <SAvatarBg>
        <img src={src} alt={name} />
      </SAvatarBg>
      <span>{name}</span>
      <SButton onClick={() => onClick(id)} disabled={active}>
        {textButton}
      </SButton>
    </SAvatarPick>
  );
};
