import { SAction, SFilter, SInventoryFilter } from "./inventoryFilter.styles.ts";
import { SearchIcon } from "@shared/assets";
import { CounterCurrency } from "@shared/components";
import { useState } from "react";

export const InventoryFilter = () => {
  const [count, setCount] = useState(100);

  const handleIncrement = () => {
    setCount((prev) => prev + 50);
  };

  const handleDecrement = () => {
    if (count >= 50) setCount((prev) => prev - 50);
  };

  return (
    <SInventoryFilter>
      <SFilter>
        <span>Цена: </span>
        <CounterCurrency increment={handleIncrement} decrement={handleDecrement} value={count} />
      </SFilter>
      <SAction icon={<SearchIcon />} />
    </SInventoryFilter>
  );
};
