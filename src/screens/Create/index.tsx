import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import CreateIndex from "./createIndexScreen";
import ImgPicker from "./imgSelectionScreen";

const createStack = createNativeStackNavigator();

const createStacksConfig = [
  {
    name: "createIndex",
    component: CreateIndex,
    options: {
      headerShown: false,
    },
  },
  {
    name: "imgPicker",
    component: ImgPicker,
    options: {
      headerShown: false,
    },
  },
];

const CreateStacks: FC = () => {
  return (
    <createStack.Navigator>
      {createStacksConfig.map((item) => {
        return (
          <createStack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        );
      })}
    </createStack.Navigator>
  );
};

export default CreateStacks;
