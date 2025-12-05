import {
  SChoice,
  SContent,
  SGiftCard,
  SIcon,
  SImg,
  SName,
  SPrice,
} from "./giftSelectedCard.styles";
import type { FC } from "react";
import type { IGift } from "@entities/gift";
import { PlusIcon, CheckIcon } from "@shared/assets";

export const GiftSelectedCard: FC<{
  id: number;
  src: string;
  isChoice: boolean;
  isSelected: boolean;
  onCLick: (item: IGift) => void;
}> = ({ isChoice, isSelected, onCLick, src, id }) => {
  const isChoiceCard = isSelected && isChoice;
  const isNotChoiceCard = isSelected && !isChoice;

  return (
    <SGiftCard onClick={() => onCLick({ src, id, isChoice })} $isChoice={isChoice}>
      <SImg src={src} />

      {isNotChoiceCard && <SChoice icon={<PlusIcon />} />}
      {isChoiceCard && <SChoice icon={<CheckIcon />} />}

      <SContent>
        <SName>Gift Red</SName>
        <SPrice>
          <SIcon src="/currency.png" alt="" />
          <span>45.244 TON</span>
        </SPrice>
      </SContent>
    </SGiftCard>
  );
};
