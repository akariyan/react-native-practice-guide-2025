import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/color";

const GuessLogItem = ({
  roundNumber,
  guess,
}: {
  roundNumber: number;
  guess: number;
}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.accent500,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
});

export default GuessLogItem;
