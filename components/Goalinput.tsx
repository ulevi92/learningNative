import { FC, useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface Props {
  addGoalHandler: (goal: string) => void;
  showModal: boolean;
  closeModal: () => void;
}

const GoalInput: FC<Props> = ({ addGoalHandler, showModal, closeModal }) => {
  const [enteredGoal, setEnteredGoal] = useState<string>("");

  const goalInputHandler = (input: string) => {
    setEnteredGoal(input);
  };

  const handleAddGoal = () => {
    addGoalHandler(enteredGoal);
    closeModal();
    setEnteredGoal("");
  };

  const handleCloseModal = () => {
    setEnteredGoal("");
    closeModal();
  };

  return (
    <Modal visible={showModal} animationType='slide'>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              onPress={handleAddGoal}
              disabled={enteredGoal === ""}
              color='#b180f0'
            />
          </View>

          <View style={styles.button}>
            <Button title='Cancel' onPress={handleCloseModal} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120428",
    borderRadius: 8,
    width: "90%",
    padding: 16,
  },

  buttonContainer: {
    flexDirection: "row-reverse",
  },

  button: {
    marginTop: 24,
    width: "35%",
    marginHorizontal: 24,
  },

  image: {
    width: 100,
    height: 100,
    margin: 16,
  },
});
