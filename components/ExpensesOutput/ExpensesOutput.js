import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({ expneses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expneses} periodName={expensesPeriod} />
      <ExpensesList expenses={expneses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 10,
    backgroundColor: GlobalStyles.colors.primary700,
    rowGap: 10,
  },
});
