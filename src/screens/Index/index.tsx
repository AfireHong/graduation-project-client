import React, { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import Mine from "../Mine";
import Create from "../Create";
import Discover from "../Discover";
import Message from "../Message";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import IndexModel from "@/models";
import { useCallback, FC, useEffect } from "react";
import { Props } from "@/typings/navigation";

const indexModel = new IndexModel();
const Index: FC<Props> = ({ navigation }) => {
  const verify = useCallback(async () => {
    const res = await indexModel.verifyUser();
    if (!res?.success) {
      navigation.navigate("Welcome");
    }
  }, [navigation]);

  useEffect(() => {
    verify();
  }, [verify]);
  const Tab = createBottomTabNavigator();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Tab.Navigator
        initialRouteName={"home"}
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let tabItem = (
              <FontAwesome name={"home"} size={size} color={color} />
            );
            switch (route.name) {
              case "home":
                tabItem = (
                  <FontAwesome name={"home"} size={size} color={color} />
                );
                break;
              case "mine":
                tabItem = (
                  <FontAwesome name={"user"} size={size} color={color} />
                );
                break;
              case "message":
                tabItem = (
                  <FontAwesome name={"envelope"} size={size} color={color} />
                );
                break;
              case "discover":
                tabItem = (
                  <FontAwesome name={"search"} size={size} color={color} />
                );
                break;
              case "create":
                tabItem = (
                  <FontAwesome
                    color={"#ff0033"}
                    name={"plus-square"}
                    size={size}
                  />
                );
                break;
            }
            return tabItem;
          },
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#999",
          tabBarShowLabel: false,
          backBehavior: "history",
          tabBarStyle: {
            backgroundColor: "rgb(27,25,31)",
            borderTopColor: "rgb(27,25,31)",
          },
        })}
        backBehavior={"history"}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="discover"
          component={Discover}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="create"
          component={Create}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="message"
          component={Message}
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
    </>
  );
};
export default Index;
