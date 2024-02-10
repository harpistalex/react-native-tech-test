import { DefaultTheme, Theme } from "@react-navigation/native";

import { BLACK, BLUE, TEAL, WHITE } from "./colors";

export const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    primary: BLUE,
    background: TEAL,
    card: WHITE,
    text: BLACK,
    border: BLACK,
    notification: BLACK,
  },
};
