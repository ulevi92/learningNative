import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import appColors from "../../colors/colors";
import { FC } from "react";

interface Props {
  onPress: () => void;
  title: string;
  date: string;
  price: number;
}

const ExpensesCard: FC<Props> = ({ date, onPress, price, title }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        android_ripple={{ color: appColors.primary }}
      >
        <View style={styles.innerButton}>
          <View>
            <Text style={styles.title}>{title}</Text>

            <Text style={styles.subTitle}>{date}</Text>
          </View>

          <View style={styles.expensePrice}>
            <Text style={styles.priceText}>
              {price}
              <Text style={styles.signStyle}>₪</Text>
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ExpensesCard;

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 12,
    marginVertical: 16,
    backgroundColor: appColors.background.card,
    borderRadius: Platform.select({ android: 8, ios: 8 }),
    overflow: "hidden",
  },

  button: {
    flex: 1,
    padding: 16,
  },

  pressed: {
    backgroundColor: appColors.primary,
    opacity: 0.35,
  },

  innerButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  expensePrice: {
    backgroundColor: "white",
    width: 80,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
  },

  title: {
    textTransform: "capitalize",
    fontSize: 24,
    fontWeight: "bold",
    color: appColors.text.primary,
  },

  subTitle: {
    fontSize: 14,
    fontWeight: "300",
    color: appColors.text.secondary,
  },

  priceText: {
    fontSize: 18,
    fontWeight: "900",
    color: appColors.primary,
  },

  signStyle: {
    color: appColors.secondary,
  },
});
