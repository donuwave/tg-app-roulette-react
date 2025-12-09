import { useState } from "react";
import { AllIcon } from "@shared/assets";
import { SFilterList, STag } from "./historyFilter.styles";
import type { IFilter, IFilterOptions } from "../model/filter.types";

const FILTER_OPTIONS: IFilterOptions[] = [
  { label: "Все", value: "all", icon: <AllIcon /> },
  { label: "Везучие", value: "lucky" },
  { label: "Большие", value: "big" },
  { label: "Гранд", value: "grand" },
];

export const HistoryFilter = () => {
  const [selected, setSelected] = useState<IFilter>("all");

  const handleToggle = (value: IFilter) => {
    setSelected(value);
  };

  return (
    <SFilterList>
      {FILTER_OPTIONS.map((option) => (
        <STag
          key={option.value}
          icon={option.icon}
          checked={selected === option.value}
          onChange={() => handleToggle(option.value)}
        >
          {option.label}
        </STag>
      ))}
    </SFilterList>
  );
};
