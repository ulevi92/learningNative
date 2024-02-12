import { FC, useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import GuessedNumber from "../components/game/GuessedNumber";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GusseLogItem";

interface Props {
  pickedNumber: number;
  onGameOver: (guessedRounds: number) => void;
}

const generateRandomNumberBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude); // Add return here
  }
  return rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: FC<Props> = ({ pickedNumber, onGameOver }) => {
  const initialGuess: number = generateRandomNumberBetween(
    1,
    100,
    pickedNumber
  );

  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessedRounds, setGuessedRounds] = useState<number[]>([initialGuess]);

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      onGameOver(guessedRounds.length);
    }
  }, [currentGuess, pickedNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const newGuess = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < pickedNumber) ||
      (direction === "greater" && currentGuess > pickedNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    // Calculate new boundaries before generating a new random number

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    // Now use the newBoundaries for generating the new random number
    const newRanNum = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    // Update state with the new boundaries and new random number

    setCurrentGuess(newRanNum);
    setGuessedRounds((prev) => [newRanNum, ...prev]);
  };

  const increateGuess = () => newGuess("greater");

  const decreaseGuess = () => newGuess("lower");

  const guessRoundListLength = guessedRounds.length;

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>

      <GuessedNumber guessedNumber={currentGuess} />

      <Card>
        <View>
          <InstructionText style={styles.instructionText}>
            Higher or lower?
          </InstructionText>

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainder}>
              <PrimaryButton onPress={increateGuess}>
                <Ionicons name='add' size={24} color={"white"} />
              </PrimaryButton>
            </View>

            <View style={styles.buttonContainder}>
              <PrimaryButton onPress={decreaseGuess}>
                <Ionicons name='remove' size={24} color={"white"} />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </Card>

      <View style={styles.listContainer}>
        <FlatList
          data={guessedRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              guess={item}
              roundNumber={guessRoundListLength - index}
            />
          )}
          keyExtractor={(guess) => String(guess)}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    marginHorizontal: 24,
  },

  buttonsContainer: {
    flexDirection: "row-reverse",
  },

  instructionText: {
    marginBottom: 12,
  },

  buttonContainder: { flex: 1 },

  listContainer: {
    flex: 1,
    height: "80%",
    padding: 16,
  },
});
