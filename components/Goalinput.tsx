import { FC, useRef, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { GoalType } from "../App";

interface Props {
  goals: GoalType[];
  setGoals: React.Dispatch<React.SetStateAction<GoalType[]>>;
}

const GoalInput: FC<Props> = ({ setGoals, goals }) => {
  const [enteredGoal, setEnteredGoal] = useState<string>("");

  const goalInputHandler = (input: string) => {
    setEnteredGoal(input);
  };

  const addGoalHandler = () => {
    setGoals((prev) => [...prev, { text: enteredGoal, id: goals.length + 1 }]);
    setEnteredGoal("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Your course goal'
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />

      <Button
        title='Add Goal'
        onPress={addGoalHandler}
        disabled={enteredGoal === ""}
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
