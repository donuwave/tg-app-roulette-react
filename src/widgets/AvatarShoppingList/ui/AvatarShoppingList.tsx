import { SList, STitle } from "./avatarShoppingList.styles";
import { AvatarShopCard } from "@entities/user";
import { ShopAvatarBottomSheet } from "@features/ShopAvatarBottomSheet";
import { useState } from "react";

export const AvatarShoppingList = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <ShopAvatarBottomSheet open={open} onClose={handleClose} />

      <div>
        <STitle>Покупайте аватары</STitle>

        <SList>
          {[1, 2, 3, 4, 5, 6].map((el) => (
            <AvatarShopCard onClick={handleOpen} key={el} />
          ))}
        </SList>
      </div>
    </>
  );
};
