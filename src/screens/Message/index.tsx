import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import MessageScreen from "./Message";

const messageStack = createNativeStackNavigator();

const createStacksConfig = [
  {
    name: "messageIndex",
    component: MessageScreen,
    options: {
      title: "消息",
      headerBackTitle: "",
    },
  },
];

const MessageStacks: FC = () => {
  return (
    <messageStack.Navigator>
      {createStacksConfig.map((item) => {
        return (
          <messageStack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        );
      })}
    </messageStack.Navigator>
  );
};

export default MessageStacks;
