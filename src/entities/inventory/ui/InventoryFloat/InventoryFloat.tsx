import {
  SActionButton,
  SInventoryFloat,
  SSelectedButton,
  STelegramButton,
} from "./inventoryFloat.styles.ts";
import { TelegramIcon } from "@shared/assets";
import type { FC } from "react";
// Я бы убрал из фичи сделал бы entities
interface IInventoryFloatProps {
  selectedText: string;
  selectedEvent: () => void;
  submitSelectedText: string;
}

export const InventoryFloat: FC<IInventoryFloatProps> = ({
  selectedEvent,
  selectedText,
  submitSelectedText,
}) => {
  return (
    <SInventoryFloat>
      <STelegramButton icon={<TelegramIcon />} />
      <SSelectedButton onClick={selectedEvent}>{selectedText}</SSelectedButton>
      <SActionButton>{submitSelectedText}</SActionButton>
    </SInventoryFloat>
  );
};
