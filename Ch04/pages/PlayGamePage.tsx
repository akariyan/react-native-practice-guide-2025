import { View, Text, StyleSheet, Alert } from "react-native";
import { PageNumber } from "../App";
import ConfirmButton from "../components/ui/ConfirmButton";
import AppTitle from "../components/ui/AppTitle";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

const generateRandomNumberBetween = (
  min: number,
  max: number,
  exclude: number
) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  }
  return rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

const PlayGamePage = ({
  gameProgressHandler,
  correctNumber,
}: {
  gameProgressHandler: (page: PageNumber, correctNumber: number) => void;
  correctNumber: number;
}) => {
  const initialGuess = generateRandomNumberBetween(1, 100, correctNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction: "lower" | "higher") => {
    if (
      (direction === "lower" && currentGuess < correctNumber) ||
      (direction === "higher" && currentGuess > correctNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    const newRndNumber = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(() => newRndNumber);
  };

  useEffect(() => {
    if (currentGuess === correctNumber) {
      gameProgressHandler(PageNumber.ResultGame, correctNumber);
    }
  }, [currentGuess, correctNumber, gameProgressHandler]);

  return (
    <View style={styles.container}>
      <AppTitle>Opponent's guess</AppTitle>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonContainer}>
        <ConfirmButton onPress={() => nextGuessHandler("lower")}>
          <Text>Lower</Text>
        </ConfirmButton>
        <ConfirmButton onPress={() => nextGuessHandler("higher")}>
          <Text>Higher</Text>
        </ConfirmButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
});

export default PlayGamePage;
