import { type JSX } from "react";

export interface IMenu {
  path: string;
  label: string;
  Icon: () => JSX.Element;
}
