// Компонент будет получать itemComponent
// Переименовать в ChoiceGiftsList

import { SGiftList } from "./giftsList.style";
import type { FC, ReactNode } from "react";
import type { IGift } from "@widgets/AddingGifts";

interface IGiftsList {
  itemContent: (item: IGift) => ReactNode;
  selectedGifts?: IGift[];
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
  ];

  return (
    <SGiftList>
      {data.map((card) =>
        itemContent({
          ...card,
          isChoice: selectedGifts ? selectedGifts.some((s) => s.id === card.id) : false,
        })
      )}
    </SGiftList>
  );
};
