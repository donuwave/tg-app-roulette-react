import { HistoryCard } from "@entities/history";
import { SHistoryList } from "./historyList.styles";
import { RollCard } from "@entities/game";
import { useState } from "react";

export const HistoryList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseRollCard = () => setIsOpen(false);
  const handleOpenRollCard = (card: unknown) => {
    setIsOpen(true);
    console.log(card);
  };

  return (
    <>
      <RollCard open={isOpen} onClose={handleCloseRollCard} />

      <SHistoryList>
        {[1, 2, 3, 4, 5, 6].map(() => (
          <HistoryCard onClick={handleOpenRollCard} />
        ))}
      </SHistoryList>
    </>
  );
};
