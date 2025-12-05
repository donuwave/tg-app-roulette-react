import { useState } from "react";
import { BottomSheet } from "@shared/components";
import { SAction, SCheckbox, SContent, SFooter, SSubmit, STitle } from "./inventorySort.styles";
import { SortIcon } from "@shared/assets";

export const InventorySort = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <SAction icon={<SortIcon />} onClick={handleOpen} />

      <BottomSheet
        open={isOpen}
        header={<STitle>Сортировка</STitle>}
        footer={
          <SFooter>
            <SSubmit onClick={handleClose}>Подтвердить</SSubmit>
          </SFooter>
        }
        onClose={handleClose}
      >
        <SContent>
          <SCheckbox>Сначала дорогие</SCheckbox>
          <SCheckbox>Сначала дешевые</SCheckbox>
          <SCheckbox>Самые популярные</SCheckbox>
          <SCheckbox>Новинки</SCheckbox>
        </SContent>
      </BottomSheet>
    </>
  );
};
