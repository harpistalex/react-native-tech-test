import { DefaultTheme, Theme } from "@react-navigation/native";

import { BLACK, DARK_GREEN, WHITE } from "./colors";

export const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    primary: BLACK,
    background: DARK_GREEN,
    card: WHITE,
    text: BLACK,
    border: BLACK,
    notification: BLACK,
  },
};
