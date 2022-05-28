import React, { useState, ReactElement } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import MasonryList from "@react-native-seoul/masonry-list";
import MomentCard from "@/components/MomentCard";
import { MomentItem } from "@/components/MomentCard";

const data: MomentItem[] = [
  {
    id: "1",
    userNickname: "南风微漾_BING",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/5c1c6498308f580001301f05.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024i01kotqbr6vhi90116f7uy0yea8gw?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
  },
  {
    id: "2",
    userNickname: "南风微漾_BING",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/5c1c6498308f580001301f05.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024301khrv9nhgt0b0111ldbxdo0agis?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
  },
];

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
  const renderItem = ({
    item,
  }: {
    item: MomentItem;
    index?: number;
  }): ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return <MomentCard item={item} />;
  };
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
          flex: 1,
        }}
      >
        {/* <Text
          style={{
            color: "#3c3c3c",
            marginTop: 40,
          }}
        >
          暂无内容
        </Text> */}
        <MasonryList
          keyExtractor={(item: MomentItem): string => item.id}
          contentContainerStyle={{
            paddingHorizontal: 10,
            alignSelf: "stretch",
            justifyContent: "space-between",
          }}
          numColumns={2}
          data={data}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default MomentDetail;
