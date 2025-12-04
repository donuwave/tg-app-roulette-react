import {
  SHistoryCard,
  SHeadMain,
  SHead,
  SAvatar,
  SPrice,
  SPercent,
  SInvestment,
  SStatus,
  SName,
  SList,
  SImg,
  SCard,
  SFooter,
  SDate,
} from "./historyCard.styles.ts";
import type { FC } from "react";

//TODO: Вытащить список подарков в отдельный компонент

interface IHistoryCardProps {
  onClick: (card: unknown) => void;
}

export const HistoryCard: FC<IHistoryCardProps> = ({ onClick }) => {
  return (
    <SHistoryCard onClick={() => onClick({ id: 1 })}>
      <SHeadMain>
        <SHead>
          <SAvatar>
            <img src="/profile.png" alt="" />
          </SAvatar>

          <SName>
            <span>@example</span>
            <SStatus>Выиграл</SStatus>
          </SName>
        </SHead>

        <SInvestment>
          <SPrice>45.244 TON</SPrice>
          <SPercent>0.82%</SPercent>
        </SInvestment>
      </SHeadMain>

      <SList>
        <SCard>
          <SImg src="/present.png" />
        </SCard>
        <SCard>
          <SImg src="/present.png" />
        </SCard>
        <SCard>
          <SImg src="/present.png" />
        </SCard>
      </SList>

      <SFooter>
        <div>#234235</div>
        <SDate>
          <span>00:09</span>
          <span>21.11.2025</span>
        </SDate>
      </SFooter>
    </SHistoryCard>
  );
};
