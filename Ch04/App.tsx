import { ImageBackground, StyleSheet } from "react-native";
import StartGamePage from "./pages/StartGamePage";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
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
        <StartGamePage />
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
