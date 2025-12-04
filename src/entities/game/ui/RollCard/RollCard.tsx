import { BottomSheet } from "@shared/components";
import {
  SAvatar,
  SHeadContent,
  SHeaderTitle,
  SInfo,
  SStatus,
  SPrice,
  SPercent,
  SNickname,
  SList,
  SFooter,
  SClose,
} from "./rollCard.styles";
import { GiftRollCard } from "@entities/gift";
import type { FC } from "react";

interface IRollCardProps {
  open: boolean;
  onClose: () => void;
}

export const RollCard: FC<IRollCardProps> = ({ open, onClose }) => {
  // Этот компонент всю информацию и массив подарков получает из вне
  const data = [
    { id: 1, src: "/present-card.png" },
    { id: 2, src: "/present-card.png" },
    { id: 3, src: "/present-card.png" },
    { id: 4, src: "/present-card.png" },
    { id: 5, src: "/present-card.png" },
    { id: 6, src: "/present-card.png" },
  ];

  return (
    <BottomSheet
      open={open}
      header={<SHeaderTitle>Ролл #54635</SHeaderTitle>}
      footer={
        <SFooter>
          <SClose>Закрыть</SClose>
        </SFooter>
      }
      onClose={onClose}
    >
      <SHeadContent>
        <SInfo>
          <SAvatar>
            <img src="/profile.png" alt="" />
          </SAvatar>
          <SNickname>@example</SNickname>
          <SStatus>Выиграл</SStatus>
        </SInfo>
        <SInfo>
          <SPercent>0.82%</SPercent>
          <SPrice>45.244 TON</SPrice>
        </SInfo>
      </SHeadContent>
      <SList>
        {data.map((card) => (
          <GiftRollCard key={card.id} {...card} />
        ))}
      </SList>
    </BottomSheet>
  );
};
