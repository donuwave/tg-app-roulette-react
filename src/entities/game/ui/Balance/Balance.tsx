import { SAddButton, SBalance, SBalanceText, SPlus } from "./balance.styles";
import type { FC } from "react";

interface IBalance {
  onClick: () => void;
}

export const Balance: FC<IBalance> = ({ onClick }) => {
  return (
    <SBalance onClick={onClick}>
      <img src="/currency.png" alt="" />
      <SBalanceText>
        <span>0</span>
        <SAddButton>
          <SPlus>+</SPlus>
        </SAddButton>
      </SBalanceText>
    </SBalance>
  );
};
