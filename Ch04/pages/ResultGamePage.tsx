import { View, Text, StyleSheet, Image } from "react-native";
import ConfirmButton from "../components/ui/ConfirmButton";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constants/color";

const ResultGamePage = ({
  moveToNextPage,
  correctNumber,
  tryCount,
}: {
  moveToNextPage: () => void;
  correctNumber: number;
  tryCount: number;
}) => {
  return (
    <View style={styles.container}>
      <Title>Game Result</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{tryCount}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{correctNumber}</Text>.
        </Text>
      </View>
      <ConfirmButton onPress={() => moveToNextPage()}>Restart!</ConfirmButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryContainer: {
    marginHorizontal: 24,
    padding: 12,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});

export default ResultGamePage;
