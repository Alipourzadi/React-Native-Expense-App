import { useSelector } from "react-redux";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpences = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  return <ExpensesOutput expneses={expenses} expensesPeriod="All Expenses" />;
};

export default AllExpences;
