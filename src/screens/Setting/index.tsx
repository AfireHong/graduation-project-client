import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { removeItem } from "@/utlis/storage";
import { Props } from "@/typings/navigation";

const Setting: FC<Props> = ({ navigation }) => {
  const loginOutHandle = async () => {
    console.log("登出");
    await removeItem("token");
    await removeItem("userInfo");
    navigation.navigate("Welcome");
  };
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={loginOutHandle}
        style={[Styles.buttonGroup, Styles.singleBtn]}
      >
        <Text>登出账户</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const Styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonGroup: {
    borderRadius: 14,
  },
  singleBtn: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
});
