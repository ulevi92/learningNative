import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../colors/colors";

interface Props {
  roundNumber: number;
  guess: number;
}

const GuessLogItem: FC<Props> = ({ guess, roundNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>

      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.darkPurple200,
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.orange,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  itemText: {
    fontFamily: "open-sans",
  },
});
