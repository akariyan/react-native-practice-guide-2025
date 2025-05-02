import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Dimensions,
} from "react-native";
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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary400,
    borderRadius: 8,
    elevation: 4, // Android
    shadowColor: Colors.black, // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowRadius: 6, // iOS
    shadowOpacity: 0.25, // iOS
  },
});

export default Card;
