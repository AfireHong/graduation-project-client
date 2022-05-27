import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const MomentDetail = () => {
  const [curTab, setCurTab] = useState(0);
  const tabs = [
    {
      id: 0,
      name: "时光",
    },
    {
      id: 1,
      name: "收藏",
    },
    {
      id: 2,
      name: "赞过",
    },
  ];
  return (
    <View style={styles.momentDetail}>
      <View style={styles.detailTabView}>
        {tabs.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={item.id === curTab ? styles.activeTab : {}}
              onPress={() => setCurTab(item.id)}
            >
              <Text style={styles.tabText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#3c3c3c",
            marginTop: 40,
          }}
        >
          暂无内容
        </Text>
      </View>
    </View>
  );
};

export default MomentDetail;
