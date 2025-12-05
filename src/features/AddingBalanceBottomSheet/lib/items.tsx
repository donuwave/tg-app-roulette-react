import type { SegmentedProps } from "antd";
import { SIcon } from "../ui/addingBalanceBottomSheet.styles";
import type { IPaymentType } from "../model/payment.types";

export const options: SegmentedProps<IPaymentType>["options"] = [
  {
    icon: (
      <SIcon>
        <img alt="present" src="/present-transparent.png" />
      </SIcon>
    ),
    value: "present",
  },
  {
    icon: (
      <SIcon>
        <img alt="present" src="/ton-transparent.png" />
      </SIcon>
    ),
    value: "ton",
  },
  {
    icon: (
      <SIcon>
        <img alt="present" src="/star-transparent.png" />
      </SIcon>
    ),
    value: "star",
  },
];
