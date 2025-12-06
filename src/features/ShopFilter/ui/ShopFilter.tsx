import { ArrowTopIcon } from "@shared/assets";
import { SFilterButton } from "./shopFilter.styles";

//TODO: Выводить только один BottomSheet, в зависимости от фильтра
export const ShopFilter = () => {
  return (
    <>
      <SFilterButton>
        <span>Тип</span>
        <ArrowTopIcon />
      </SFilterButton>
      <SFilterButton>
        <span>Скин</span>
        <ArrowTopIcon />
      </SFilterButton>
      <SFilterButton>
        <span>Фон</span>
        <ArrowTopIcon />
      </SFilterButton>
    </>
  );
};
