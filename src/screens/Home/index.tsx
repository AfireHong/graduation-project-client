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
    userId: "1",
  },
  {
    id: "2",
    userNickname: "用户1",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024301khrv9nhgt0b0111ldbxdo0agis?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
    userId: "1",
  },
  {
    id: "3",
    userNickname: "用户2",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024g016jpdu2ehcgt0112ququ0lux3sn?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
    userId: "1",
  },
  {
    id: "4",
    userNickname: "用户3",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024b01kg74u8l7lhg0101nd728bd4rld?imageView2/2/w/1080/format/webp",
    likes: 12031,
    userId: "1",
  },
  {
    id: "5",
    userNickname: "用户212",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024i01kotqbr6vhi90116f7uy0yea8gw?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
    userId: "1",
  },
  {
    id: "6",
    userNickname: "用户133",
    title: "测试",
    userAvatar:
      "https://sns-avatar-qc.xhscdn.com/avatar/619cace24cb101c88aa48f8c.jpg?imageView2/2/w/80/format/jpg",
    coverImg:
      "http://sns-img-qc.xhscdn.com/01024i01kotqbr6vhi90116f7uy0yea8gw?imageView2/2/w/540/format/jpg/q/75",
    likes: 12031,
    userId: "1",
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          marginBottom: 10,
          paddingBottom: 4,
          borderColor: "#eee",
          borderBottomWidth: 1,
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
      <View
        style={{
          flex: 1,
          backgroundColor: "#f0f0f0",
        }}
      >
        <MasonryList
          keyExtractor={(item: MomentItem): string => item.id as string}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabText: {
    fontWeight: "800",
    fontSize: 16,
    color: "black",
  },
  activeTab: {
    borderBottomWidth: 3,
    paddingBottom: 4,
    borderColor: "#ff0033",
  },
});
export default Home;
