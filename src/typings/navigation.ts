import type { NativeStackScreenProps } from "@react-navigation/native-stack";
export type RootStackParamList = {
  Login: undefined;
  Index: undefined;
  Welcome: undefined;
  Register: undefined;
  Setting: undefined;
  User: { id: string };
  Social: undefined;
  Moment: { id: string };
};
export type Props = NativeStackScreenProps<RootStackParamList>;
