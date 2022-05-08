import React, { View, SafeAreaView, Text } from "react-native";
import { useLayoutEffect, FC } from "react";
import { Props } from "@/typings/navigation";

const CreateScreen: FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <Text>新建</Text>
    </SafeAreaView>
  );
};

export default CreateScreen;
