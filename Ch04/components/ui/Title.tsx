import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/color";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.secondary500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.secondary500,
    backgroundColor: Colors.primary300,
    padding: 12,
  },
});

export default Title;
