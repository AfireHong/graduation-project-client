import { Platform, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager?.HEIGHT;

export default STATUSBAR_HEIGHT;
