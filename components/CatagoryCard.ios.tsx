import { FC } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from "react-native";
import { useAppNavigation } from "../hooks/customHooks";

interface Props {
  title: string;
  color: string;
  onPress: () => void;
}

const CatagoryCard: FC<Props> = ({ title, color, onPress }) => {
  const dynamicStyle: StyleProp<TextStyle> = {
    backgroundColor: color,
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={onPress}
      >
        <View style={[styles.innerContainer, dynamicStyle]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CatagoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  button: {
    flex: 1,
  },

  pressed: {
    opacity: 0.5,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
