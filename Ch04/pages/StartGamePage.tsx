import { View, TextInput, StyleSheet, Alert } from "react-native";
import ConfirmButton from "../components/ui/ConfirmButton";
import { useState } from "react";
import { PageNumber } from "../App";
import Colors from "../constants/color";

const StartGamePage = ({
  gameProgressHandler,
}: {
  gameProgressHandler: (page: PageNumber, correctNumber: number) => void;
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
    gameProgressHandler(PageNumber.PlayGame, chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber(() => "");
  };

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primary300,
    alignItems: "center",
    justifyContent: "center",
    padding: 36,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 4, // Android
    shadowColor: Colors.black, // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowRadius: 6, // iOS
    shadowOpacity: 0.25, // iOS
  },
  numberInput: {
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary100,
    borderBottomWidth: 2,
    color: Colors.secondary100,
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
