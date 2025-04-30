import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import ConfirmButton from "../components/ui/ConfirmButton";
import Colors from "../constants/color";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

const StartGamePage = ({
  moveToNextPage,
}: {
  moveToNextPage: (correctNumber: number) => void;
}) => {
  const MAX_NUMBER = 99;
  const MIN_NUMBER = 1;

  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber)) {
      Alert.alert("Not Number!", "Your correct is must be a number.", [
        { text: "OK", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    if (chosenNumber < MIN_NUMBER || chosenNumber > MAX_NUMBER) {
      Alert.alert("Invalid number!", "Number must be between 1 and 99.", [
        {
          text: "OK",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    moveToNextPage(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber(() => "");
  };

  return (
    <Card>
      <Title>Enter a Number</Title>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <ConfirmButton onPress={resetInputHandler}>RESET</ConfirmButton>
        </View>
        <View style={styles.button}>
          <ConfirmButton onPress={confirmInputHandler}>START</ConfirmButton>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  numberInput: {
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary300,
    borderBottomWidth: 2,
    color: Colors.secondary300,
    marginVertical: 8,
    paddingBottom: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 16,
    marginHorizontal: 8,
  },
  button: {
    flex: 1,
  },
});

export default StartGamePage;
