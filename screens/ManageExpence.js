import { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/GlobalStyles";
import { expenseAction } from "../store/ExpenseSlice";

const ManageExpence = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const editedExpenseData = route.params;

  const isEditing = !!editedExpenseData?.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    dispatch(expenseAction.deleteExpense({ id: editedExpenseData.id }));
    navigation.goBack();
  }
  function addExpenseHandler({ amount, description, date }) {
    dispatch(
      expenseAction.addExpense({
        amount,
        description,
        date,
      })
    );
    navigation.goBack();
  }

  function updateExpnseHandler({ amount, description, date, id }) {
    dispatch(
      expenseAction.updateExpense({
        amount,
        description,
        date,
        id,
      })
    );
    navigation.goBack();
  }

  function cancelExpenseHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelExpenseHandler}
        onAdd={addExpenseHandler}
        onConfirm={updateExpnseHandler}
        isEditing={isEditing}
        defaultValues={editedExpenseData}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="duplicate-outline"
            size={44}
            color={GlobalStyles.colors.accent500}
            onPress={addExpenseHandler.bind(this, {
              description: editedExpenseData.description,
              amount: editedExpenseData.amount,
              date: new Date(editedExpenseData.date),
            })}
          />
          <IconButton
            icon="trash-outline"
            size={44}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,

    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpence;
