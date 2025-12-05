import {
  STitle,
  SInventoryPage,
  SFooter,
  SSubmit,
  SAddPvp,
  SHeadFilter,
} from "./inventoryPage.styles";
import { HeaderPortal } from "@widgets/Header";
import { InventoryFilter, InventoryFloat, InventorySort } from "@entities/inventory";
import { GiftsList } from "@features/GiftsList";
import { GiftBottomSheet, GiftSelectedCard, type IGift } from "@entities/gift";
import { useState } from "react";

const InventoryPage = () => {
  const [choiceGift, setChoiceGift] = useState<IGift[]>([]);
  const [isSelected, setIsSelected] = useState(false);
  const [isOpenGift, setIsOpenGift] = useState(false);

  const handleChoiceGift = (gift: IGift) => {
    setChoiceGift((prev) => {
      if (prev.some((el) => el.id === gift.id)) {
        return prev.filter((el) => el.id !== gift.id);
      }

      return [...prev, gift];
    });
  };

  const handleOpenGift = () => {
    setIsOpenGift(true);
  };
  const handleCloseGift = () => {
    setIsOpenGift(false);
  };

  const handleSelect = () => setIsSelected(true);
  const handleNotSelect = () => {
    setIsSelected(false);
    setChoiceGift([]);
  };

  const selectedText = isSelected ? "Отменить" : "Выбрать";
  const selectedEvent = isSelected ? handleNotSelect : handleSelect;
  const eventCard = isSelected ? handleChoiceGift : handleOpenGift;
  const submitSelectedText =
    isSelected && choiceGift.length > 0 ? `Вывести ${choiceGift.length} гифт` : "Внести подарок";

  return (
    <>
      <GiftBottomSheet
        footer={
          <SFooter>
            <SSubmit onClick={handleCloseGift}>Готово</SSubmit>
            <SAddPvp>+ добавить в PVP</SAddPvp>
          </SFooter>
        }
        open={isOpenGift}
        onClose={handleCloseGift}
      />

      <InventoryFloat
        submitSelectedText={submitSelectedText}
        selectedEvent={selectedEvent}
        selectedText={selectedText}
      />

      <SInventoryPage>
        <HeaderPortal>
          <STitle>Инвентарь</STitle>

          <SHeadFilter>
            <InventorySort />
            <InventoryFilter />
          </SHeadFilter>
        </HeaderPortal>

        <GiftsList
          selectedGifts={choiceGift}
          itemContent={(item) => (
            <GiftSelectedCard isSelected={isSelected} onCLick={eventCard} {...item} />
          )}
        />
      </SInventoryPage>
    </>
  );
};

export default InventoryPage;
