export type IPaymentType = "present" | "ton" | "star";

export interface IGiftBottomSheetProps {
  open: boolean;
  onClose: () => void;
}
