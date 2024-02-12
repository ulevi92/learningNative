import { FC } from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  useWindowDimensions,
} from "react-native";
import { colors } from "../../colors/colors";

interface Props {
  guessedNumber: number;
}

const GuessedNumber: FC<Props> = ({ guessedNumber }) => {
  const { width } = useWindowDimensions();

  const minWidthStyle: StyleProp<TextStyle> = {
    minWidth: width > 500 ? "0%" : "80%",
  };

  return (
    <View style={[styles.container, minWidthStyle]}>
      <Text style={styles.text}>{guessedNumber}</Text>
    </View>
  );
};

export default GuessedNumber;

const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: deviceWidth < 400 ? 12 : 24,
    padding: deviceWidth < 400 ? 8 : 16,
    borderWidth: 4,
    borderColor: colors.orange,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 400 ? 28 : 36,
    color: colors.orange,
  },
});
