// default view and text component for the number

import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

const NumberContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary500,
    padding: 36,
    borderRadius: 8,
    marginVertical: 24,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: Colors.primary300,
  },
  numberText: {
    color: Colors.secondary500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
