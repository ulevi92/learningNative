import { Image, Platform, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { colors } from "../colors/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { FC } from "react";

interface Props {
  onStartNewGame: () => void;
  roundsNumber: number;
  userNumber: number;
}

const GameOverScreen: FC<Props> = ({
  onStartNewGame,
  roundsNumber,
  userNumber,
}) => (
  <View style={styles.container}>
    <Title>Gave Over!</Title>

    <View style={styles.imageContainder}>
      <Image
        style={styles.image}
        source={require("../assets/images/success.png")}
      />
    </View>

    <Text style={styles.summaryText}>
      Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
      rounds to guess the number{" "}
      <Text style={styles.highlight}>{userNumber}</Text>.
    </Text>

    <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
  </View>
);

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainder: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.darkPurple200,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.purple,
  },
});
