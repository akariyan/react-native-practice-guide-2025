import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import ConfirmButton from "../components/ui/ConfirmButton";
import Title from "../components/ui/Title";
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
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>Game Result</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  imageContainer: {
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
