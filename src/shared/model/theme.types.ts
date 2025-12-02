declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: string;
        additional: string;
      };
      text: {
        main: string;
        secondary: string;
      };
      border: {
        main: string;
      };
      active: {
        main: string;
      };
    };
  }
}
