import { BottomSheet } from "@shared/components";
import type { FC, ReactNode } from "react";
import { SFooter, SHeaderTitle, SSubmit } from "./giftBottomSheet.styles";
import { GiftInfo } from "../GiftInfo/GiftInfo";

interface IGiftBottomSheetProps {
  open: boolean;
  onClose: () => void;
  footer?: ReactNode;
}

export const GiftBottomSheet: FC<IGiftBottomSheetProps> = ({ open, onClose, footer }) => {
  const footerContent = footer ? (
    footer
  ) : (
    <SFooter>
      <SSubmit onClick={onClose}>Готово</SSubmit>
    </SFooter>
  );

  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      height="95dvh"
      footer={footerContent}
      header={<SHeaderTitle>Гифт</SHeaderTitle>}
    >
      <GiftInfo />
    </BottomSheet>
  );
};
