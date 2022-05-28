import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import DiscoverScreen from "./discover";
import SearchResultScreen from "./searchResult";

const DiscoverStack = createNativeStackNavigator();

const DiscoverConfig = [
  {
    name: "discoverIndex",
    component: DiscoverScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: "searchResult",
    component: SearchResultScreen,
    options: {
      headerShown: false,
    },
  },
];

const DiscoverStacks: FC = () => {
  return (
    <DiscoverStack.Navigator>
      {DiscoverConfig.map((item) => {
        return (
          <DiscoverStack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        );
      })}
    </DiscoverStack.Navigator>
  );
};

export default DiscoverStacks;
