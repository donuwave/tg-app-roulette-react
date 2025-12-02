import { SChance, SLastWinCard, SPrice, SRow, SSecondary, STitle } from "./lastWinCard.styles";

export const LastWinCard = () => {
  return (
    <SLastWinCard>
      <SRow>
        <STitle>@example</STitle>
        <SPrice>+45.244 TON</SPrice>
      </SRow>
      <SRow>
        <SSecondary>пред. игра</SSecondary>
        <SChance>Шанс 0.82%</SChance>
      </SRow>
    </SLastWinCard>
  );
};
