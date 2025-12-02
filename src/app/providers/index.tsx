import type { FC, PropsWithChildren } from "react";

import { WithStyledComponents } from "./WithStyledComponents";
import { WithTheme } from "./WithTheme";

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <WithStyledComponents>
      <WithTheme>{children}</WithTheme>
    </WithStyledComponents>
  );
};
