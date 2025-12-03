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
  const [selected, setSelected] = useState<IFilter[]>(["all"]);
  // Запихнуть в zustand при использовании

  const handleToggle = (value: IFilter) => {
    setSelected((prev) => {
      if (value === "all") {
        return ["all"];
      }

      const wasSelected = prev.includes(value);
      let newSelection = [...prev];

      if (wasSelected) {
        newSelection = newSelection.filter((item) => item !== value);
      } else {
        newSelection.push(value);
      }

      if (newSelection.includes("all")) {
        newSelection = newSelection.filter((item) => item !== "all");
      }

      if (newSelection.length === 0) {
        return ["all"];
      }

      return newSelection;
    });
  };

  const getActiveFilters = () => {
    if (selected.includes("all")) {
      return ["all"];
    }
    return selected;
  };

  const activeFilters = getActiveFilters();

  return (
    <SFilterList>
      {FILTER_OPTIONS.map((option) => (
        <STag
          key={option.value}
          icon={option.icon}
          checked={activeFilters.includes(option.value)}
          onChange={() => handleToggle(option.value)}
        >
          {option.label}
        </STag>
      ))}
    </SFilterList>
  );
};
