import { SButton, SCounterCurrency, SText } from "./сounterCurrency.styles";
import type { FC } from "react";
import { PlusIcon } from "@shared/assets";

interface ICounterCurrency {
  value: number;
  decrement: () => void;
  increment: () => void;
}

export const CounterCurrency: FC<ICounterCurrency> = ({ value, increment, decrement }) => {
  return (
    <SCounterCurrency>
      <SButton onClick={decrement}>-</SButton>
      <SText>{value} TON</SText>
      <SButton icon={<PlusIcon />} onClick={increment} />
    </SCounterCurrency>
  );
};
