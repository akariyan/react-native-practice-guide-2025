import { View, Text, StyleSheet, Pressable } from "react-native";

const ConfirmButton = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.buttonPressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#929292" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 16,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#48e1a4b1",
    paddingHorizontal: 16,
    paddingVertical: 4,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default ConfirmButton;
