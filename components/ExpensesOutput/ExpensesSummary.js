import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/GlobalStyles";

const ExpensesSummary = ({ periodName, expenses }) => {
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  return (
    <View style={styles.container}>
      <Text style={styles.periodName}>{periodName}</Text>
      <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 6,
    padding: 14,
  },
  periodName: {
    fontSize: 16,
    color: GlobalStyles.colors.primary400,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
