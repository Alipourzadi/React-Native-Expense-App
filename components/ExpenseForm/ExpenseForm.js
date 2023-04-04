import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

import Button from "../UI/Button";
import IconButton from "../UI/IconButton";
import Input from "./Input";

const ExpenseForm = ({
  onCancel,
  onConfirm,
  onAdd,
  isEditing,
  defaultValues,
}) => {
  console.log(defaultValues);
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputType, enteredValue) => {
    setInputs((prevState) => ({
      ...prevState,
      [inputType]: {
        value: enteredValue,
        isValid: true,
      },
    }));
  };

  const submitFormHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((pervState) => {
        return {
          amount: { value: pervState.amount.value, isValid: amountIsValid },
          date: { value: pervState.date.value, isValid: dateIsValid },
          description: {
            value: pervState.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    if (isEditing) {
      onConfirm({ ...expenseData, id: defaultValues.id });
    } else {
      onAdd(expenseData);
    }
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.formContainer}>
      <View>
        <View style={styles.inputsWrapper}>
          <Input
            label="Amount"
            style={styles.inlineInput}
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"),
              invalid: inputs.amount.isValid ? false : true,
              value: inputs.amount.value,
            }}
          />
          <Input
            label="Date"
            style={styles.inlineInput}
            textInputConfig={{
              maxLength: 10,
              placeholder: "YYYY-MM-DD",
              onChangeText: inputChangeHandler.bind(this, "date"),
              invalid: inputs.date.isValid ? false : true,
              value: inputs.date.value,
              autoCorrect: false,
            }}
          />
        </View>
        <Input
          label="Description"
          textInputConfig={{
            onChangeText: inputChangeHandler.bind(this, "description"),
            multiline: true,
            value: inputs.description.value,
            invalid: inputs.description.isValid ? false : true,
            autoCorrect: false,
          }}
        />
      </View>
      {formIsInvalid && (
        <View style={styles.errorContainer}>
          <IconButton
            icon="alert-circle-outline"
            color={GlobalStyles.colors.error50}
            size={24}
          />
          <Text style={styles.errorText}>
            Form is invalid.Please check your inputs!
          </Text>
        </View>
      )}
      <View style={styles.buttons}>
        <Button mode="flat" style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitFormHandler}>
          {isEditing ? "Confirm" : "Add"}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  formContainer: {
    gap: 12,
  },
  inputsWrapper: {
    flexDirection: "row",
    gap: 6,
  },
  inlineInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    minWidth: 120,
  },
  errorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: GlobalStyles.colors.error50,
    fontSize: 14,
  },
});
