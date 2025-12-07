import { type JSX } from "react";

export interface IMenu {
  key: string;
  path: string;
  label: string;
  Icon: () => JSX.Element;
}
