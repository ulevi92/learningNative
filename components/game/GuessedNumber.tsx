import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../colors/colors";

interface Props {
  guessedNumber: number;
}

const GuessedNumber: FC<Props> = ({ guessedNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{guessedNumber}</Text>
    </View>
  );
};

export default GuessedNumber;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 12,
    padding: 24,
    borderWidth: 4,
    borderColor: colors.orange,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 36,
    color: colors.orange,
  },
});
