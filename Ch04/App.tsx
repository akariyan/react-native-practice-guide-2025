import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import StartGamePage from "./pages/StartGamePage";
import PlayGamePage from "./pages/PlayGamePage";
import ResultGamePage from "./pages/ResultGamePage";
import Colors from "./constants/color";

export enum PageNumber {
  StartGame = 0,
  PlayGame = 1,
  ResultGame = 2,
}

const App = () => {
  const [currentPage, setCurrentPage] = useState<PageNumber>(
    PageNumber.StartGame
  );
  const [correctNumber, setCorrectNumber] = useState<number>(0);

  const gameProgressHandler = (page: PageNumber, correctNumber: number) => {
    setCurrentPage(() => page);
    setCorrectNumber(() => correctNumber);
  };

  const gameRestartHandler = () => {
    setCurrentPage(() => PageNumber.StartGame);
    setCorrectNumber(() => 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case PageNumber.StartGame:
        return <StartGamePage gameProgressHandler={gameProgressHandler} />;
      case PageNumber.PlayGame:
        return (
          <PlayGamePage
            gameProgressHandler={gameProgressHandler}
            correctNumber={correctNumber}
          />
        );
      case PageNumber.ResultGame:
        return (
          <ResultGamePage
            gameRestartHandler={gameRestartHandler}
            correctNumber={correctNumber}
          />
        );
    }
  };

  return (
    <LinearGradient
      colors={[Colors.primary100, Colors.primary500]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.rootBackgroundImage}
      >
        <SafeAreaProvider>
          <SafeAreaView style={styles.rootScreen}>{renderPage()}</SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  rootScreen: {
    flex: 1,
  },
  rootBackgroundImage: {
    opacity: 0.35,
  },
});

export default App;
