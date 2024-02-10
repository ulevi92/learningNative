import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/Goalinput";
import { StatusBar } from "expo-status-bar";

export type GoalType = { text: string; id: number };

export default function App() {
  const [goals, setGoals] = useState<GoalType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const addGoalHandler = (goal: string) => {
    setGoals((prev) => [...prev, { text: goal, id: Math.random() }]);
    closeModal();
  };

  const handleDelete = (id: number) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <StatusBar style='inverted' />

      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          onPress={() => setShowModal(true)}
          color='#a065ec'
        />

        <GoalInput
          addGoalHandler={addGoalHandler}
          showModal={showModal}
          closeModal={closeModal}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem
                goalText={itemData.item.text}
                handleDelete={handleDelete}
                id={itemData.item.id}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 11,
  },
});
