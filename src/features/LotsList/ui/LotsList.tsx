import { SCount, SIdentifier, SList, SLotsHeader, SLotsList } from "./lotsList.styles";
import { ParticipantCard, RollCard } from "@entities/game";
import { useState } from "react";
import { GiftBottomSheet } from "@entities/gift";

// HistoryList - дубликат логики
export const LotsList = () => {
  const [isOpenLot, setIsOpenLot] = useState(false);
  const [isOpenGift, setIsOpenGift] = useState(false);

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

      <SLotsList>
        <SLotsHeader>
          <SCount>Игроков (3)</SCount>
          <SIdentifier>#234235</SIdentifier>
        </SLotsHeader>

        <SList>
          {[1, 2, 3].map((el) => (
            <ParticipantCard key={el} onClick={handleOpenRollCard} />
          ))}
        </SList>
      </SLotsList>
    </>
  );
};
