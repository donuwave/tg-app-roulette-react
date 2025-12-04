import { SContent, SGiftCard, SIcon, SImg, SName, SPrice } from "./giftRollCard.stytes";
import type { FC } from "react";

export const GiftRollCard: FC<{
  id: number;
  src: string;
  onClick?: (gift: unknown) => void;
}> = ({ src, onClick }) => {
  return (
    <SGiftCard onClick={() => onClick && onClick({ id: 1 })}>
      <SImg src={src} />

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
