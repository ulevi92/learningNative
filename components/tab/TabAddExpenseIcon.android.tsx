import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import appColors from "../../colors/colors";

interface Props {
  tintColor: string | undefined;
  onPress: () => void;
}

const TabAddExpenseIcon: FC<Props> = ({ tintColor, onPress }) => {
  return (
    <View style={styles.containder}>
      <Pressable
        android_ripple={{ color: appColors.background.main }}
        onPress={onPress}
      >
        <Ionicons name='add' size={25} color={tintColor} />
      </Pressable>
    </View>
  );
};

export default TabAddExpenseIcon;

const styles = StyleSheet.create({
  containder: {
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
    borderRadius: 17.5,
    overflow: "hidden",
  },
});
