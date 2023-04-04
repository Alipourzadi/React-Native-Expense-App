import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import { getFormattedDate } from "../../utility/date";
import { useNavigation } from "@react-navigation/native";

const ExpensesItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();
  const expenseItemPressHandler = () => {
    navigation.navigate("ManageExpense", {
      id,
      description,
      amount,
      date: date.toISOString(),
    });
  };
  return (
    <Pressable
      onPress={expenseItemPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpensesItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary400,
    marginVertical: 6,
    borderRadius: 8,
    padding: 8,
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray700,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  pressed: {
    opacity: 0.75,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 18,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    padding: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    borderRadius: 6,
  },
});
