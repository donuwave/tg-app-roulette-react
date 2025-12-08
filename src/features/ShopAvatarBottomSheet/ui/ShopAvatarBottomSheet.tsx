import { BottomSheet } from "@shared/components";
import type { FC } from "react";
import {
  SHeaderTitle,
  STitle,
  SPrice,
  SRow,
  STable,
  SImg,
  SInfo,
  SLabel,
  SName,
  SPercent,
  SGiftInfo,
  SHash,
  SHead,
  SContent,
  SFooter,
  SButton,
} from "./shopAvatarBottomSheet.styles";

interface IShopAvatarBottomSheetProps {
  open: boolean;
  onClose: () => void;
}

export const ShopAvatarBottomSheet: FC<IShopAvatarBottomSheetProps> = ({ open, onClose }) => {
  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      height="95dvh"
      footer={
        <SFooter>
          <SButton>Купить 45.244 TON</SButton>
        </SFooter>
      }
      header={<SHeaderTitle>Аватар</SHeaderTitle>}
    >
      <SGiftInfo>
        <SImg src="/avatar-main.png" />

        <SContent>
          <SHead>
            <STitle>Gift Red</STitle>
            <SPrice>
              <img alt="currency" src="/currency.png" />
              <span>45.244 TON</span>
            </SPrice>
          </SHead>

          <STable>
            <SRow>
              <SLabel>Model</SLabel>
              <SInfo>
                <SName>Gift Red</SName>
                <SPercent>2.5%</SPercent>
              </SInfo>
            </SRow>
            <SRow>
              <SLabel>Model</SLabel>
              <SInfo>
                <SName>Gift Red</SName>
                <SPercent>2.5%</SPercent>
              </SInfo>
            </SRow>
            <SRow>
              <SLabel>Model</SLabel>
              <SInfo>
                <SName>Gift Red</SName>
                <SPercent>2.5%</SPercent>
              </SInfo>
            </SRow>
          </STable>

          <SHash>Hash 8324235...23564</SHash>
        </SContent>
      </SGiftInfo>
    </BottomSheet>
  );
};
