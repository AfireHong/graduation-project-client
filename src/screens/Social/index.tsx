import { Props } from "@/typings/navigation";
import React, { FC, useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import user from "@/models/user";
import UserItem from "./userItem";

const UserModel = new user();

const SocialScreen: FC<Props> = (props) => {
  const { navigation } = props;
  const [currentTab, setCurrentTab] = useState(1);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "小饼干",
    });
  });
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ffffff",
        height: "100%",
      }}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.tab}>
        <TouchableOpacity
          onPress={() => setCurrentTab(2)}
          style={[
            {
              marginRight: 30,
            },
            currentTab === 2 ? styles.activeTab : {},
          ]}
        >
          <Text style={styles.tabText}>关注</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentTab(1)}
          style={currentTab === 1 ? styles.activeTab : {}}
        >
          <Text style={styles.tabText}>粉丝</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <UserItem></UserItem>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabText: {
    fontSize: 14,
    color: "#000000",
  },
  tab: {
    marginTop: 10,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    paddingBottom: 4,
    borderColor: "#ff0033",
  },
});
export default SocialScreen;
