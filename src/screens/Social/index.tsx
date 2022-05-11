import { Props } from "@/typings/navigation";
import React, { FC, useLayoutEffect } from "react";
import { SafeAreaView, Text } from "react-native";
const SocialScreen: FC<Props> = (props) => {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "小饼干",
    });
  });
  return (
    <SafeAreaView>
      <Text>关注和粉丝列表</Text>
    </SafeAreaView>
  );
};

export default SocialScreen;
