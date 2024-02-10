import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import { BLACK, DARK_GREEN } from "../styles/colors";
import { AppTheme } from "../styles/theme";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "/",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
    Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={AppTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            title: "Beer List",
            headerStyle: {
              backgroundColor: DARK_GREEN,
            },
            headerTitleStyle: {
              fontFamily: "BebasNeue",
              fontSize: 32,
              color: BLACK,
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="beer-detail"
          options={{
            headerShown: true,
            title: "Beer Details",
            headerStyle: {
              backgroundColor: DARK_GREEN,
            },
            headerTitleStyle: {
              fontFamily: "BebasNeue",
              fontSize: 32,
              color: BLACK,
            },
            headerShadowVisible: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
