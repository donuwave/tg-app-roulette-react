import {
  SActions,
  SBalance,
  SBalanceText,
  SFillButton,
  SInfo,
  SProfileBalance,
  SWalletButton,
} from "./profileBalance.styles";
import { WalletIcon } from "@shared/assets";

export const ProfileBalance = () => {
  return (
    <SProfileBalance>
      <SInfo>
        <SBalanceText>Ваш баланс</SBalanceText>
        <SBalance>
          <img src="/ton-transparent.png" />
          <span>0</span>
        </SBalance>
      </SInfo>
      <SActions>
        <SFillButton>Пополнить</SFillButton>
        <SWalletButton icon={<WalletIcon />} />
      </SActions>
    </SProfileBalance>
  );
};
