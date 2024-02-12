import { FC, PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../colors/colors";

interface Props extends PropsWithChildren {
  onPress: () => void;
}

const PrimaryButton: FC<Props> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOtterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: colors.darkPurple100 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOtterContainer: {
    borderRadius: 28,
    marginHorizontal: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: colors.darkPurple200,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  pressed: {
    opacity: 0.75,
  },

  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
  },
});
