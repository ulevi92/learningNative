import {
  Dimensions,
  Image,
  useWindowDimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
}) => {
  const { width, scale } = useWindowDimensions();

  let content = (
    <>
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
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={[styles.imageContainder, styles.imageContainderWide]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>

        <Text style={[styles.summaryText, styles.summaryTextWide]}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Title>Gave Over!</Title>

      {content}

      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainder: {
    height: deviceWidth < 400 ? 200 : 300,
    width: deviceWidth < 400 ? 200 : 300,
    borderRadius: deviceWidth < 400 ? 100 : 150,
    borderWidth: 3,
    borderColor: colors.darkPurple200,
    overflow: "hidden",
    margin: 36,
  },

  imageContainderWide: {
    height: 150,
    width: 150,
    borderRadius: 75,
    margin: 0,
    marginTop: 8,
    elevation: 4,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowColor: "black",
    shadowRadius: 4,
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

  summaryTextWide: {
    marginBottom: 8,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.purple,
  },
});
