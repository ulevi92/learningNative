import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { FC, useState } from "react";
import { colors } from "../colors/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

interface Props {
  pickedNumber: (number: number) => void;
}

const StartGameScreen: FC<Props> = ({ pickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const onInputChange = (input: string) => {
    setEnteredNumber(input);
  };

  const onResetClick = () => setEnteredNumber("");

  const onConfirmAlert = () => onResetClick();

  const onConfirmClick = () => {
    const chozenNumber = parseInt(enteredNumber);

    if (isNaN(chozenNumber) || chozenNumber <= 0 || chozenNumber > 99) {
      Alert.alert(
        "Invalid",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "ok",
            style: "destructive",
            onPress: onConfirmAlert,
          },
        ],
        { cancelable: true }
      );

      return;
    }

    pickedNumber(chozenNumber);
  };

  return (
    <View style={styles.root}>
      <Title>Guess My Number</Title>

      <Card>
        <InstructionText>Enter a number</InstructionText>

        <TextInput
          style={styles.input}
          keyboardType='number-pad'
          maxLength={2}
          autoCapitalize='none'
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={onInputChange}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onResetClick}>Reset</PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onConfirmClick}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
  },

  input: {
    height: 50,
    width: 70,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "600",
    borderBottomWidth: 4,
    borderBottomColor: colors.orange,
    padding: 8,
    color: colors.orange,
    marginVertical: 8,
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: { flex: 1 },
});
