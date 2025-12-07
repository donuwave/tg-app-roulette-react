import { ArrowTopIcon } from "@shared/assets";
import { SCheckbox, SFilterButton, SHeader, SContent } from "./shopFilter.styles";
import { BottomSheet } from "@shared/components";
import { useState } from "react";
import { Button } from "antd";

type FilterKey = "type" | "skin" | "bg";

type FilterOption = {
  id: string;
  img: string;
  label: string;
};

const FILTERS: Record<FilterKey, { title: string; items: FilterOption[] }> = {
  type: {
    title: "Тип",
    items: [
      { id: "gifts", img: "/present.png", label: "Gift boxes for New Year" },
      { id: "gifts 2", img: "/present.png", label: "Gift boxes for New Year" },
    ],
  },
  bg: {
    title: "Фон",
    items: [
      { id: "bg1", img: "/present.png", label: "Gift boxes for New Year" },
      { id: "bg2", img: "/present.png", label: "Gift boxes for New Year" },
      { id: "bg3", img: "/present.png", label: "Gift boxes for New Year" },
      { id: "bg4", img: "/present.png", label: "Gift boxes for New Year" },
    ],
  },
  skin: {
    title: "Скин",
    items: [
      { id: "skin1", img: "/present.png", label: "Gift boxes for New Year" },
      { id: "skin2", img: "/present.png", label: "Gift boxes for New Year" },
      { id: "skin3", img: "/present.png", label: "Gift boxes for New Year" },
    ],
  },
};

type SelectedState = Record<FilterKey, string[]>;

export const ShopFilter = () => {
  const [openedFilter, setOpenedFilter] = useState<FilterKey | null>(null);
  const [selected, setSelected] = useState<SelectedState>({
    type: [],
    bg: [],
    skin: [],
  });

  const current = openedFilter ? FILTERS[openedFilter] : null;

  const toggleOption = (filterKey: FilterKey, optionId: string) => {
    setSelected((prev) => {
      const list = prev[filterKey];
      const exists = list.includes(optionId);

      return {
        ...prev,
        [filterKey]: exists ? list.filter((id) => id !== optionId) : [...list, optionId],
      };
    });
  };

  const toggleAll = (filterKey: FilterKey) => {
    const allIds = FILTERS[filterKey].items.map((i) => i.id);

    setSelected((prev) => {
      const allSelected = prev[filterKey].length === allIds.length;
      return {
        ...prev,
        [filterKey]: allSelected ? [] : allIds,
      };
    });
  };

  return (
    <>
      <BottomSheet
        open={openedFilter !== null}
        header={current && <SHeader>{current.title}</SHeader>}
        onClose={() => setOpenedFilter(null)}
        footer={
          <div>
            <Button onClick={() => setOpenedFilter(null)}>Подтведрить</Button>
          </div>
        }
      >
        {openedFilter && current && (
          <SContent>
            {(() => {
              const allIds = current.items.map((i) => i.id);
              const allChecked = selected[openedFilter].length === allIds.length;

              return (
                <SCheckbox
                  type="checkbox"
                  checked={allChecked}
                  onChange={() => toggleAll(openedFilter)}
                >
                  Выбрать все
                </SCheckbox>
              );
            })()}

            {/* обычные чекбоксы */}
            {current.items.map((item) => {
              const checked = selected[openedFilter].includes(item.id);

              return (
                <SCheckbox
                  key={item.id}
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleOption(openedFilter, item.id)}
                >
                  <img src={item.img} alt="" width={40} height={40} />
                  <span>{item.label}</span>
                </SCheckbox>
              );
            })}
          </SContent>
        )}
      </BottomSheet>

      {/* кнопки, которые открывают нужный фильтр */}
      <SFilterButton onClick={() => setOpenedFilter("type")}>
        <span>Тип</span>
        <ArrowTopIcon />
      </SFilterButton>

      <SFilterButton onClick={() => setOpenedFilter("skin")}>
        <span>Скин</span>
        <ArrowTopIcon />
      </SFilterButton>

      <SFilterButton onClick={() => setOpenedFilter("bg")}>
        <span>Фон</span>
        <ArrowTopIcon />
      </SFilterButton>
    </>
  );
};
