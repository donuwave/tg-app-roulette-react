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
      defaultActiveBg: theme.colors.background.primary,
      defaultHoverBg: theme.colors.background.primary,
      defaultActiveColor: theme.colors.text.main,
      defaultHoverColor: theme.colors.text.main,
      defaultActiveBorderColor: "#00B2BC",
      defaultHoverBorderColor: "#00B2BC",
    },
    Checkbox: {
      controlInteractiveSize: 25,
      colorBgContainer: "#282729",
      colorBorder: "#535254",
      colorPrimary: theme.colors.active.main,
      colorText: theme.colors.text.main,
    },
    Slider: {
      trackBg: "#0d4245",
      trackHoverBg: "#0d4245",
      railBg: "#0d4245",
    },
  },
});
