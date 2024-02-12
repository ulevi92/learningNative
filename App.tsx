import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import { colors } from "./colors/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export type GoalType = { text: string; id: number };

export default function App() {
  const [isFontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutView = useCallback(async () => {
    if (isFontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isFontLoaded]);

  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [GameIsOver, setGameIsOver] = useState<boolean>(false);
  const [guessedRounds, setGuessedRounds] = useState<number>(0);

  const onStartNewGame = () => {
    setGameIsOver(false);
    setUserNumber(null);
    setGuessedRounds(0);
  };

  const onAddRounds = (num: number) => setGuessedRounds((prev) => prev + 1);

  if (!isFontLoaded) return null;

  const pickedNumber = (number: number) => {
    setUserNumber(number);
  };

  const onGameOver = (guessedRounds: number) => {
    setGameIsOver(true);
    setGuessedRounds(guessedRounds);
  };

  const RenderScreens = () => {
    if (GameIsOver)
      return (
        <GameOverScreen
          roundsNumber={guessedRounds}
          userNumber={userNumber!}
          onStartNewGame={onStartNewGame}
        />
      );

    if (userNumber)
      return <GameScreen onGameOver={onGameOver} pickedNumber={userNumber} />;

    return <StartGameScreen pickedNumber={pickedNumber} />;
  };

  return (
    <LinearGradient
      onLayout={onLayoutView}
      colors={[colors.purple, colors.orange]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode='cover'
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <StatusBar style='auto' />

        <SafeAreaView style={styles.screens}>
          <RenderScreens />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  screens: { flex: 1, paddingTop: Platform.OS === "android" ? 25 : 0 },

  backgroundImage: {
    opacity: 0.25,
  },
});
