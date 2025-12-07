import {
  SButton,
  SCard,
  SCount,
  SCounter,
  SSlider,
  STitle,
  SValue,
} from "./createSettingsCard.styles";
import type { FC, ReactNode } from "react";

interface ICreateSettingsCard {
  value: number;
  onChange: (value: number) => void;
  title: string;
  maxCount: number;
  iteration: string | ReactNode;
}

const step = 5;

export const CreateSettingsCard: FC<ICreateSettingsCard> = ({
  maxCount,
  title,
  iteration,
  onChange,
  value = 10,
}) => {
  const handleChange = (action: "decrement" | "increment") => {
    if (action === "increment") {
      if (maxCount > value + step) {
        onChange(value + step);
      } else {
        onChange(maxCount);
      }
    } else if (action === "decrement") {
      if (0 < value - step) {
        onChange(value - step);
      } else {
        onChange(0);
      }
    }
  };

  return (
    <SCard>
      <STitle>
        <span>{title}</span>
        <SCounter>
          <SButton onClick={() => handleChange("decrement")}>-</SButton>
          <SCount>{value}</SCount>
          <SButton onClick={() => handleChange("increment")}>+</SButton>
        </SCounter>
      </STitle>
      <SValue>
        {value} {iteration}
      </SValue>
      <SSlider value={value} max={maxCount} onChange={onChange} />
    </SCard>
  );
};
