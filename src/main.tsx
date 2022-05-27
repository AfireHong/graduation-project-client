import React from "react-native";
import Login from "@/screens/Login/index";
import Root from "@/screens/Index";
import WelCome from "@/screens/Welcome";
import Register from "@/screens/Register";
import Setting from "@/screens/Setting";
import User from "@/screens/User";
import Social from "@/screens/Social";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/typings/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();
const stackConfig = [
  {
    name: "Index",
    component: Root,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Welcome",
    component: WelCome,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  {
    name: "Register",
    component: Register,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Login",
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Setting",
    component: Setting,
  },
  {
    name: "User",
    component: User,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Social",
    component: Social,
    options: {
      title: "关注与粉丝",
      headerBackTitle: "",
    },
  },
];
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {stackConfig.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name as keyof RootStackParamList}
            component={item.component}
            options={item.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
