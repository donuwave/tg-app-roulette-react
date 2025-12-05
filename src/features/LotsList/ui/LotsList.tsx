import { SCount, SIdentifier, SList, SLotsHeader, SLotsList } from "./lotsList.styles";
import { ParticipantCard, RollCard } from "@entities/game";
import { GiftBottomSheet } from "@entities/gift";
import { useOpenGiftFromLot } from "@shared/hooks";

export const LotsList = () => {
  const {
    isOpenLot,
    handleOpenGift,
    handleOpenRollCard,
    handleCloseRollCard,
    handleCloseGift,
    isOpenGift,
  } = useOpenGiftFromLot();

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
