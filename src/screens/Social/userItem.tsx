import React, { FC } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UserItem: FC = () => {
  return (
    <View style={styles.constiner}>
      <View style={styles.user}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://afirehong.cn/i.png" }}
        />
        <Text style={{ color: "#363636", fontSize: 16, fontWeight: "700" }}>
          小饼干
        </Text>
      </View>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  constiner: {
    width: "100%",
    borderBottomColor: "#e3e3e3",
    paddingBottom: 12,
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
  },
});
