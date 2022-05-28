import React, { SafeAreaView } from "react-native";
import { FC, useLayoutEffect } from "react";
import { Box } from "native-base";
import { useNavigation } from "@react-navigation/native";

const SearchResult: FC = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  });
  return (
    <SafeAreaView>
      <Box>搜索结果页</Box>
    </SafeAreaView>
  );
};

export default SearchResult;
