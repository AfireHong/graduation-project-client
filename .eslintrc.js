module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "@react-native-community",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@react-native-community", "@typescript-eslint", "react"],
  rules: {
    "react-native/no-inline-styles": 0,
  },
};
