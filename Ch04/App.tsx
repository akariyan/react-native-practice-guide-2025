import { ImageBackground, StyleSheet } from "react-native";
import StartGamePage from "./pages/StartGamePage";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import PlayGamePage from "./pages/PlayGamePage";
import ResultGamePage from "./pages/ResultGamePage";

export enum PageNumber {
  StartGame = 0,
  PlayGame = 1,
  ResultGame = 2,
}

const App = () => {
  const [currentPage, setCurrentPage] = useState<PageNumber>(
    PageNumber.StartGame
  );

  const setCurrentPageHandler = (page: PageNumber) => {
    setCurrentPage(() => page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case PageNumber.StartGame:
        return <StartGamePage setCurrentPage={setCurrentPageHandler} />;
      case PageNumber.PlayGame:
        return <PlayGamePage setCurrentPage={setCurrentPageHandler} />;
      case PageNumber.ResultGame:
        return <ResultGamePage setCurrentPage={setCurrentPageHandler} />;
    }
  };

  return (
    <LinearGradient
      colors={["#b5c0f6", "#3fa3f5"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootBackgroundImageContainer}
        imageStyle={styles.rootBackgroundImage}
      >
        {renderPage()}
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#3fa3f5",
  },
  rootBackgroundImageContainer: {
    flex: 1,
  },
  rootBackgroundImage: {
    opacity: 0.35,
  },
});

export default App;
