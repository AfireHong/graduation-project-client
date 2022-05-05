import React, { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import Mine from "../Mine";
import Create from "../Create";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import IndexModel from "@/models";
import { useCallback, FC } from "react";
import { Props } from "@/typings/navigation";

const indexModel = new IndexModel();
const Index: FC<Props> = ({ navigation }) => {
  const verify = useCallback(async () => {
    const res = await indexModel.verifyUser();
    if (!res?.success) {
      navigation.navigate("Welcome");
    }
  }, [navigation]);

  verify();

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let tabItem = <FontAwesome name={"home"} size={size} color={color} />;
          switch (route.name) {
            case "home":
              tabItem = <FontAwesome name={"home"} size={size} color={color} />;
              break;
            case "mine":
              tabItem = <FontAwesome name={"user"} size={size} color={color} />;
              break;
            case "create":
              tabItem = (
                <FontAwesome color={"#ff0033"} name={"plus-square"} size={34} />
              );
              break;
          }
          return tabItem;
        },
        tabBarActiveTintColor: "#f9829a",
        tabBarInactiveTintColor: "#999",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="create"
        component={Create}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="mine"
        component={Mine}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default Index;
