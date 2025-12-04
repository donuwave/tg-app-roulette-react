import { SContent, SGiftCard, SImg, SName, SPrice } from "./giftCard.styles";
import type { FC } from "react";
import type { IGift } from "@widgets/AddingGifts";

export const GiftCard: FC<{
  id: number;
  src: string;
  isChoice: boolean;
  onCLick: (item: IGift) => void;
}> = ({ isChoice, onCLick, src, id }) => {
  return (
    <SGiftCard onClick={() => onCLick({ src, id, isChoice })} $isChoice={isChoice}>
      <SImg src={src} />

      <SContent>
        <SName>Gift Red</SName>
        <SPrice>45.244 TON</SPrice>
      </SContent>
    </SGiftCard>
  );
};
