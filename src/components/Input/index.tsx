import React, { useState, FC } from "react";
import { StyleSheet, TextInput, View, TextInputProps } from "react-native";
import * as Icon from "@expo/vector-icons";
import Text from "../Text";
import Block from "../Block";
import { theme } from "../../constants";

interface InputProps {
  email?: any;
  phone?: any;
  number?: any;
  secure?: any;
  error?: any;
  style?: any;
  label?: any;
}

const Label: FC<{ label: string; error: boolean }> = (props) => {
  const { label, error } = props;
  return (
    <Block flex={false}>
      {label ? (
        <Text gray2={!error} accent={error}>
          {label}
        </Text>
      ) : null}
    </Block>
  );
};

const Input: FC<InputProps & TextInputProps> = (props) => {
  const [toggleSecure, setToggleSecure] = useState(false);
  const { email, phone, number, secure, error, label, style } = props;
  const isSecure = toggleSecure ? false : secure;
  const inputStyles = [
    styles.input,
    error && { borderColor: theme.colors.accent },
    style,
  ];

  const inputType = email
    ? "email-address"
    : number
    ? "numeric"
    : phone
    ? "phone-pad"
    : "default";
  return (
    <Block flex={false} margin={[theme.sizes.base, 0]}>
      <Label label={label} error={error} />
      <TextInput
        style={inputStyles}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        {...props}
      />
    </Block>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.base,
    fontWeight: "500",
    color: theme.colors.black,
    height: theme.sizes.base * 3,
  },
  toggle: {
    position: "absolute",
    alignItems: "flex-end",
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 2,
    top: theme.sizes.base,
    right: 0,
  },
});
