import { BottomSheet, Counter } from "@shared/components";
import {
  SContent,
  SFooter,
  SHeaderTitle,
  SSegmented,
  SSubmit,
} from "./addingBalanceBottomSheet.styles";
import { type FC, useState } from "react";
import type { IPaymentType, IGiftBottomSheetProps } from "../model/payment.types";
import { options } from "../lib/items";
import type { SegmentedProps } from "antd";

export const AddingBalanceBottomSheet: FC<IGiftBottomSheetProps> = ({ open, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<IPaymentType>("present");
  const [count, setCount] = useState(0);

  const handleChangePaymentMethod: SegmentedProps<unknown>["onChange"] = (v: unknown) =>
    setPaymentMethod(v as IPaymentType);

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      height="65dvh"
      footer={
        <SFooter>
          <SSubmit onClick={onClose}>Пополнить баланс</SSubmit>
        </SFooter>
      }
      header={<SHeaderTitle>Пополнить баланс</SHeaderTitle>}
    >
      <SContent>
        <SSegmented<IPaymentType>
          value={paymentMethod}
          onChange={handleChangePaymentMethod}
          options={options}
        />

        <Counter value={count} decrement={handleDecrement} increment={handleIncrement} />
      </SContent>
    </BottomSheet>
  );
};
