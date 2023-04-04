import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

const Input = ({ label, style, textInputConfig }) => {
  const textInputStyle = [styles.textInput];

  if (textInputConfig && textInputConfig.multiline) {
    textInputStyle.push(styles.multiline);
  }
  if (textInputConfig && textInputConfig.invalid) {
    textInputStyle.push(styles.invalid);
  }

  return (
    <View style={[styles.inputContainer, style && style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={textInputStyle} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    margin: 6,
    gap: 6,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
  },
  textInput: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  multiline: {
    minHeight: 60,
  },
  invalid: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
