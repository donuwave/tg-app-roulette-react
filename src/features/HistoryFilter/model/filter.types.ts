import type { ReactNode } from "react";

export interface IFilterOptions {
  label: string;
  value: IFilter;
  icon?: ReactNode;
}

export type IFilter = "all" | "lucky" | "big" | "grand";
