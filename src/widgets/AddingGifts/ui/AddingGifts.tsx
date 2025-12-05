import {
  SAddChoice,
  SAddPvp,
  SFooter,
  SHeaderBottomSheet,
  SHeaderTitle,
  SShopButton,
} from "./addingGifts.styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@shared/config";
import { BottomSheet } from "@shared/components";
import { GiftsList } from "@features/GiftsList";
import { GiftCard, type IGift } from "@entities/gift";

export const AddingGifts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [choiceGift, setChoiceGift] = useState<IGift[]>([]);
  const navigate = useNavigate();

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleToShop = () => navigate(routes.shop);

  const handleChoiceGift = (gift: IGift) => {
    setChoiceGift((prev) => {
      if (prev.some((el) => el.id === gift.id)) {
        return prev.filter((el) => el.id !== gift.id);
      }

      return [...prev, gift];
    });
  };

  const handleConfirmationSelection = () => {
    console.log(choiceGift);
    setIsOpen(false);
    setChoiceGift([]);
  };

  return (
    <>
      <SAddPvp onClick={handleOpen}>+ Добавить в PVP</SAddPvp>

      <BottomSheet
        onClose={handleClose}
        onCancel={handleClose}
        open={isOpen}
        header={
          <SHeaderBottomSheet>
            <SHeaderTitle>Добавить в PVP</SHeaderTitle>
          </SHeaderBottomSheet>
        }
        footer={
          <SFooter>
            <SShopButton onClick={handleToShop}>В магазин</SShopButton>
            <SAddChoice onClick={handleConfirmationSelection}>Добавить выбранное</SAddChoice>
          </SFooter>
        }
        height="70dvh"
      >
        <GiftsList
          selectedGifts={choiceGift}
          itemContent={(item) => <GiftCard onCLick={handleChoiceGift} key={item.id} {...item} />}
        />
      </BottomSheet>
    </>
  );
};
