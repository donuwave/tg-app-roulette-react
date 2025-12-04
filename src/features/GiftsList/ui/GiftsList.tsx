// Компонент будет получать itemComponent
// Переименовать в ChoiceGiftsList

import { SGiftList } from "./giftsList.style";
import type { FC, ReactNode } from "react";
import type { IGift } from "@widgets/AddingGifts";

interface IGiftsList {
  selectedGifts: IGift[];
  itemContent: (item: IGift) => ReactNode;
}

export const GiftsList: FC<IGiftsList> = ({ itemContent, selectedGifts }) => {
  // Запрос на получение списка
  const data = [
    { id: 1, src: "/present-card.png" },
    { id: 2, src: "/present-card.png" },
    { id: 3, src: "/present-card.png" },
    { id: 4, src: "/present-card.png" },
    { id: 5, src: "/present-card.png" },
    { id: 6, src: "/present-card.png" },
    { id: 7, src: "/present-card.png" },
    { id: 8, src: "/present-card.png" },
    { id: 9, src: "/present-card.png" },
    { id: 10, src: "/present-card.png" },
    { id: 11, src: "/present-card.png" },
    { id: 12, src: "/present-card.png" },
    { id: 13, src: "/present-card.png" },
  ];

  return (
    <SGiftList>
      {data.map((card) =>
        itemContent({ ...card, isChoice: selectedGifts.some((s) => s.id === card.id) })
      )}
    </SGiftList>
  );
};
