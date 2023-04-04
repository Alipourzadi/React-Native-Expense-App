import { useSelector } from "react-redux";
import { getDateMinusDays } from "../utility/date";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpences = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput expneses={recentExpenses} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpences;
