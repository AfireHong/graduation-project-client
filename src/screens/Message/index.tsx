import React, {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { FC } from "react";
import { Props } from "@/typings/navigation";

const MessageScreen: FC<Props> = () => {
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <Text>消息</Text>
    </SafeAreaView>
  );
};

export default MessageScreen;
