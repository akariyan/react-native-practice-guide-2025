import { View, Text, StyleSheet } from "react-native";
import { PageNumber } from "../App";
import ConfirmButton from "../components/ui/ConfirmButton";

const ResultGamePage = ({
  gameRestartHandler,
  correctNumber,
}: {
  gameRestartHandler: () => void;
  correctNumber: number;
}) => {
  return (
    <View style={styles.container}>
      <Text>Your Win!</Text>
      <Text>Answer is {correctNumber}!</Text>
      <ConfirmButton onPress={() => gameRestartHandler()}>
        Restart!
      </ConfirmButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResultGamePage;
