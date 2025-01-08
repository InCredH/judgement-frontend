import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'BubblegumSans': require('../assets/fonts/Bubblegum_Sans/BubblegumSans-Regular.ttf'),
    'Quicksand': require('../assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf'),
    'Righteous': require('../assets/fonts/Righteous/Righteous-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Or a loading screen
  }
  return (
    <Stack
    screenOptions={{
      headerShown: false,

    }}
    />
  );
}
