import { FC } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from "react-native";

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
    <View style={[styles.container, dynamicStyle]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
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
    elevation: 4,
    overflow: "hidden",
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    flex: 1,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
