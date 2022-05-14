import React, {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ReactElement, useState, FC } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import MomentCard from "@/components/MomentCard";
import { MomentItem } from "@/components/MomentCard";
import { Props } from "@/typings/navigation";

const data: MomentItem[] = [
  {
    id: "1",
    userNickname: "啵崽",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024i01kotqbr6vhi90116f7uy0yea8gw?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
  },
  {
    id: "2",
    userNickname: "啵崽",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024i01kotqbr6vhi90116f7uy0yea8gw?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
  },
  {
    id: "3",
    userNickname: "啵崽",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024i01kotqbr6vhi90116f7uy0yea8gw?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
  },
  {
    id: "4",
    userNickname: "啵崽",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024i01kotqbr6vhi90116f7uy0yea8gw?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
  },
  {
    id: "5",
    userNickname: "啵崽",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024i01kotqbr6vhi90116f7uy0yea8gw?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
  },
  {
    id: "6",
    userNickname: "啵崽",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024i01kotqbr6vhi90116f7uy0yea8gw?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
  },
];
const Home: FC<Props> = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState(1);
  const toUserProfile = () => {
    navigation.navigate("User");
  };
  const renderItem = ({
    item,
  }: {
    item: MomentItem;
    index?: number;
  }): ReactElement => {
    return <MomentCard item={item} userClick={toUserProfile} />;
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
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
          <Text style={styles.tabText}>时光</Text>
        </TouchableOpacity>
      </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabText: {
    fontWeight: "800",
    fontSize: 16,
    color: "white",
  },
  activeTab: {
    borderBottomWidth: 3,
    paddingBottom: 4,
    borderColor: "#ff0033",
  },
});
export default Home;
