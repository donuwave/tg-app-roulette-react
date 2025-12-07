import { SCard, SCardContent, SCardTitle } from "./cardButtonCreate.styles";
import type { FC } from "react";
import type { ICardButtonCreate } from "../../model/cardButtonCreate.types";

export const CardButtonCreate: FC<ICardButtonCreate> = ({ description, title, onClick }) => {
  return (
    <SCard onClick={onClick}>
      <SCardTitle>{title}</SCardTitle>
      <SCardContent>{description}</SCardContent>
    </SCard>
  );
};
