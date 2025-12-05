import { useState } from "react";

export const useOpenGiftFromLot = () => {
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

  return {
    isOpenGift,
    isOpenLot,
    handleOpenGift,
    handleCloseGift,
    handleCloseRollCard,
    handleOpenRollCard,
  };
};
