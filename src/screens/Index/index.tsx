import React from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import Mine from "../Mine";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Index = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName = "home";
          console.log(route.name);

          switch (route.name) {
            case "主页":
              iconName = "home";
              break;
            case "我":
              iconName = "user";
              break;
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF5678",
        tabBarInactiveTintColor: "#999",
      })}
    >
      <Tab.Screen name="主页" component={Home} />
      <Tab.Screen name="我" component={Mine} />
    </Tab.Navigator>
  );
};
export default Index;
