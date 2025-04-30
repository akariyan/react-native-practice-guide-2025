import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import Colors from "../../constants/color";

const Card = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary400,
    justifyContent: "center",
    alignItems: "center",
    padding: 36,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 4, // Android
    shadowColor: Colors.black, // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowRadius: 6, // iOS
    shadowOpacity: 0.25, // iOS
    gap: 16,
  },
});

export default Card;
