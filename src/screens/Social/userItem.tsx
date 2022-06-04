/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface userItemProps {
  avatar: string;
  nickname: string;
  user_id: string;
  Operate?: FC;
}

const UserItem: FC<userItemProps> = ({
  avatar,
  nickname,
  user_id,
  Operate,
}) => {
  const navigation = useNavigation();
  const itemClick = () => {
    //@ts-ignore
    navigation.navigate("User", {
      id: user_id,
    });
  };
  return (
    <View style={styles.constiner}>
      <TouchableOpacity
        onPress={() => itemClick()}
        style={styles.user}
        activeOpacity={0.8}
      >
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <Text style={{ color: "#363636", fontSize: 16, fontWeight: "700" }}>
          {nickname}
        </Text>
      </TouchableOpacity>
      {Operate && <Operate />}
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  constiner: {
    width: "100%",
    borderBottomColor: "#e3e3e3",
    padding: 20,
    borderBottomWidth: 1,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    marginRight: 10,
    borderRadius: 18,
  },
});
