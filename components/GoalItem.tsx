import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  goalText: string;
  handleDelete: (id: number) => void;
  id: number;
}

const GoalItem: FC<Props> = ({ goalText, handleDelete, id }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => handleDelete(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.textColor}>{goalText}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#ccc",
  },

  textColor: {
    padding: 8,
    color: "#fff",
  },
});
