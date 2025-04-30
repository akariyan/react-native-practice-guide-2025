import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import Colors from "../../constants/color";

const InstructionText = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style: StyleProp<TextStyle>;
}) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
