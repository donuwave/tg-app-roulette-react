import { BottomSheet } from "@shared/components";
import type { FC } from "react";

interface IGiftBottomSheetProps {
  open: boolean;
  onClose: () => void;
}

export const GiftBottomSheet: FC<IGiftBottomSheetProps> = ({ open, onClose }) => {
  return (
    <BottomSheet open={open} onClose={onClose} footer={null} header={<div>header</div>}>
      Тута будет выводиться информация о подарке
    </BottomSheet>
  );
};
