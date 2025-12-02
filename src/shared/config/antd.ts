import type { ThemeConfig } from "antd";
import type { DefaultTheme } from "styled-components";

export const getAntDesignConfig = (_: DefaultTheme): ThemeConfig => ({
  token: {
    fontFamily: "Inter",
    fontSize: 14,
  },
});
