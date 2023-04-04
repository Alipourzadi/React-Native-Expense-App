import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-19"),
    },
    {
      id: "e2",
      description: "A pair of trousers",
      amount: 89.29,
      date: new Date("2022-01-05"),
    },
    {
      id: "e3",
      description: "Some bananas",
      amount: 5.99,
      date: new Date("2021-12-01"),
    },
    {
      id: "e4",
      description: "A book",
      amount: 14.99,
      date: new Date("2022-02-19"),
    },
    {
      id: "e5",
      description: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
    {
      id: "e6",
      description: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
    {
      id: "e7",
      description: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
    {
      id: "e8",
      description: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
    {
      id: "e9",
      description: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
    {
      id: "e10",
      description: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
    {
      id: "e11",
      description: "Happpiness",
      amount: 18.59,
      date: new Date("2023-03-23"),
    },
  ],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialState,
  reducers: {
    addExpense(state, action) {
      state.expenses.push({
        id: new Date().toString() + Math.random().toString(),
        description: action.payload.description,
        amount: action.payload.amount,
        date: action.payload.date,
      });
    },
    deleteExpense(state, action) {
      state.expenses = state.expenses.filter(
        (expense) => expense.id != action.payload.id
      );
      console.log(state, action.payload);
    },
    updateExpense(state, action) {
      const updatableExpenseIndex = state.expenses.findIndex(
        (expense) => expense.id == action.payload.id
      );
      const updatableExpense = state.expenses[updatableExpenseIndex];
      const updatedExpense = { ...updatableExpense, ...action.payload };
      state.expenses[updatableExpenseIndex] = updatedExpense;
    },
  },
});

export const expenseAction = expenseSlice.actions;

export default expenseSlice.reducer;
