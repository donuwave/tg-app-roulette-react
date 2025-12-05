import { SButton, SCounter, SCounterText } from "./counter.styles";
import type { FC } from "react";

interface ICounter {
  value: number;
  decrement: () => void;
  increment: () => void;
}

export const Counter: FC<ICounter> = ({ value, increment, decrement }) => {
  return (
    <SCounter>
      <SButton onClick={decrement} disabled={value <= 0}>
        -
      </SButton>
      <SCounterText>{value}</SCounterText>
      <SButton onClick={increment}>+</SButton>
    </SCounter>
  );
};
