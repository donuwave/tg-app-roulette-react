import {
  SContent,
  SGiftInfo,
  SHash,
  SHead,
  SImg,
  SInfo,
  SLabel,
  SName,
  SPercent,
  SPrice,
  SRow,
  STable,
  STitle,
} from "./giftInfo.styles";

export const GiftInfo = () => {
  return (
    <SGiftInfo>
      <SImg src="/present-full.png" />

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
  );
};
