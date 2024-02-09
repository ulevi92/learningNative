import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/Goalinput";

export type GoalType = { text: string; id: number };

export default function App() {
  const [goals, setGoals] = useState<GoalType[]>([]);

  const handleDelete = (id: number) => {
    setGoals((prev) => goals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput setGoals={setGoals} goals={goals} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              goalText={itemData.item.text}
              handleDelete={handleDelete}
            />
          )}
          keyExtractor={(item) => item.text}
        />
      </View>
    </View>
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
