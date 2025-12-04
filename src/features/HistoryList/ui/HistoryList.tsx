import { HistoryCard } from "@entities/history";
import { SHistoryList } from "./historyList.styles";
import { RollCard } from "@entities/game";
import { useState } from "react";
import { GiftBottomSheet } from "@entities/gift";

export const HistoryList = () => {
  const [isOpenGift, setIsOpenGift] = useState(false);
  const [isOpenLot, setIsOpenLot] = useState(false);

  const handleCloseRollCard = () => setIsOpenLot(false);
  const handleOpenRollCard = (card: unknown) => {
    setIsOpenLot(true);
    console.log(card);
  };

  const handleCloseGift = () => {
    setIsOpenGift(false);
  };
  const handleOpenGift = (gift: unknown) => {
    setIsOpenGift(true);
    console.log(gift);
  };

  return (
    <>
      <RollCard open={isOpenLot} onClickPresent={handleOpenGift} onClose={handleCloseRollCard} />
      <GiftBottomSheet open={isOpenGift} onClose={handleCloseGift} />

      <SHistoryList>
        {[1, 2, 3, 4, 5, 6].map((el) => (
          <HistoryCard key={el} onClick={handleOpenRollCard} />
        ))}
      </SHistoryList>
    </>
  );
};
