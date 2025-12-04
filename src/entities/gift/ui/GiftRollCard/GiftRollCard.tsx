import { SContent, SGiftCard, SImg, SName, SPrice } from "./giftRollCard.stytes";
import type { FC } from "react";

export const GiftRollCard: FC<{
  id: number;
  src: string;
}> = ({ src }) => {
  return (
    <SGiftCard>
      <SImg src={src} />

      <SContent>
        <SName>Gift Red</SName>
        <SPrice>45.244 TON</SPrice>
      </SContent>
    </SGiftCard>
  );
};
