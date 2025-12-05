import { Balance } from "@entities/game";
import { useState } from "react";
import { AddingBalanceBottomSheet } from "@features/AddingBalanceBottomSheet";

export const AddingBalance = () => {
  const [isOpenBalance, setIsOpenBalance] = useState(false);

  const handleCloseRollCard = () => setIsOpenBalance(false);
  const handleOpenRollCard = () => {
    setIsOpenBalance(true);
  };

  return (
    <>
      <AddingBalanceBottomSheet open={isOpenBalance} onClose={handleCloseRollCard} />
      <Balance onClick={handleOpenRollCard} />
    </>
  );
};
