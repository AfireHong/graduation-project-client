import React, {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { ReactElement } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import MomentCard from "@/components/MomentCard";
import { MomentItem } from "@/components/MomentCard";

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
const Home = () => {
  const renderItem = ({
    item,
  }: {
    item: MomentItem;
    index?: number;
  }): ReactElement => {
    return <MomentCard item={item} />;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <MasonryList
        keyExtractor={(item: MomentItem): string => item.id}
        // loading={true}
        // LoadingView={
        //   <View>
        //     <Text>加载中···</Text>
        //   </View>
        // }
        ListHeaderComponent={
          <View>
            <Text>头部测试</Text>
          </View>
        }
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

export default Home;
