import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import ConfirmButton from "../components/ui/ConfirmButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constants/color";
import GuessLogItem from "../components/game/GuessLogItem";

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
  moveToNextPage,
  correctNumber,
}: {
  moveToNextPage: (correctNumber: number, tryCount: number) => void;
  correctNumber: number;
}) => {
  const initialGuess = generateRandomNumberBetween(1, 100, correctNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const nextGuessHandler = (direction: "lower" | "higher") => {
    if (
      (direction === "lower" && currentGuess < correctNumber) ||
      (direction === "higher" && currentGuess > correctNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "destructive" },
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
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]); // 라운드 로그를 출력할때 가장 최근 게임이 가장 위에 출력되도록 함
  };

  useEffect(() => {
    // 첫 렌더링때 -> 매 게임 시작 시마다 초기화
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === correctNumber) {
      moveToNextPage(correctNumber, guessRounds.length);
    }
  }, [currentGuess, correctNumber, guessRounds.length]);

  return (
    <View style={styles.container}>
      <Title>Opponent's guess</Title>
      <InstructionText>Higher or Lower?</InstructionText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.card}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <ConfirmButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </ConfirmButton>
          </View>
          <View style={styles.button}>
            <ConfirmButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="add" size={24} color="white" />
            </ConfirmButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }: { item: number; index: number }) => (
            <GuessLogItem
              roundNumber={guessRounds.length - index}
              guess={item}
            />
          )}
          keyExtractor={(item): string => item.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    gap: 16,
  },
  card: {
    marginHorizontal: 0,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    gap: 16,
    justifyContent: "center",
  },
  button: {
    flex: 1,
    height: 50,
  },
  listContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
});

export default PlayGamePage;
