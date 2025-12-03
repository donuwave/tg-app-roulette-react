import type { ThemeConfig } from "antd";
import type { DefaultTheme } from "styled-components";

export const getAntDesignConfig = (theme: DefaultTheme): ThemeConfig => ({
  token: {
    fontFamily: "Inter",
    fontSize: 14,
  },
  components: {
    Segmented: {
      itemColor: theme.colors.text.main,
      itemSelectedBg: theme.colors.text.main,
      itemSelectedColor: theme.colors.background.primary,
      itemHoverColor: "#00B2BC",
      trackBg: "#2F2F2F",
      colorBorder: "#D9D9D9",
      borderRadiusSM: 20,
    },
    Tag: {
      colorPrimary: theme.colors.text.main,
      colorText: theme.colors.text.main,
      colorTextLightSolid: theme.colors.background.primary,
      colorPrimaryActive: theme.colors.active.main,
      colorPrimaryHover: theme.colors.active.main,
    },
    Button: {
      defaultActiveBg: "inherit",
      defaultHoverBg: "inherit",
      defaultActiveBorderColor: "#00B2BC",
      defaultHoverBorderColor: "#00B2BC",
    },
  },
});
