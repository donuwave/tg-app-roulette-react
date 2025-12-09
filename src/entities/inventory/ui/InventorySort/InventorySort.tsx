import { useState } from "react";
import { BottomSheet } from "@shared/components";
import { SAction, SCheckbox, SContent, SFooter, SSubmit, STitle } from "./inventorySort.styles";
import { SortIcon } from "@shared/assets";

export const InventorySort = () => {
  const [selectedIndex, setSelectedIndex] = useState(5);
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
          <SCheckbox checked={selectedIndex === 0} onChange={() => setSelectedIndex(0)}>
            Сначала дорогие
          </SCheckbox>

          <SCheckbox checked={selectedIndex === 1} onChange={() => setSelectedIndex(1)}>
            Сначала дешевые
          </SCheckbox>

          <SCheckbox checked={selectedIndex === 2} onChange={() => setSelectedIndex(2)}>
            Самые популярные
          </SCheckbox>

          <SCheckbox checked={selectedIndex === 3} onChange={() => setSelectedIndex(3)}>
            Новинки
          </SCheckbox>
        </SContent>
      </BottomSheet>
    </>
  );
};
