import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

const InstructionText = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default InstructionText;
