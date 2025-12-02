import { SAddButton, SBalance, SBalanceText, SPlus } from "./balance.styles";

export const Balance = () => {
  return (
    <SBalance>
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
