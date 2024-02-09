import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  goalText: string;
  handleDelete: (id: number) => void;
}

const GoalItem: FC<Props> = ({ goalText, handleDelete }) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Text style={styles.textColor}>{goalText}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  textColor: {
    color: "#fff",
  },
});
