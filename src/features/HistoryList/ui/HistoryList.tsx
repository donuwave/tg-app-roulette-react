import { HistoryCard } from "@entities/history";
import { SHistoryList } from "./historyList.styles";
import { RollCard } from "@entities/game";
import { GiftBottomSheet } from "@entities/gift";
import { useOpenGiftFromLot } from "@shared/hooks";

export const HistoryList = () => {
  const {
    handleOpenGift,
    handleOpenRollCard,
    handleCloseRollCard,
    isOpenGift,
    handleCloseGift,
    isOpenLot,
  } = useOpenGiftFromLot();

  return (
    <>
      <RollCard open={isOpenLot} onClickPresent={handleOpenGift} onClose={handleCloseRollCard} />
      <GiftBottomSheet open={isOpenGift} onClose={handleCloseGift} />

      <SHistoryList>
        {[1, 2, 3, 4, 5, 6, 7].map((el) => (
          <HistoryCard key={el} onClick={handleOpenRollCard} />
        ))}
      </SHistoryList>
    </>
  );
};
