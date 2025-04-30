import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
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
  const { width, height } = useWindowDimensions();

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

  const marginTopDistance = height < 380 ? 30 : 100;
  const marginBottomDistance = height < 380 ? 20 : 50;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView behavior="position" style={styles.screen}>
        <View
          style={[
            styles.rootContainer,
            {
              marginTop: marginTopDistance,
              marginBottom: marginBottomDistance,
            },
          ]}
        >
          <Title>Enter a Number</Title>
          <Card>
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
                <ConfirmButton onPress={confirmInputHandler}>
                  START
                </ConfirmButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default StartGamePage;
