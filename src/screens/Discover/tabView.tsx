import React, { FC, memo, ReactElement } from "react";
import { useWindowDimensions, ScrollView } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Box } from "native-base";
import { useNavigation } from "@react-navigation/native";
import MasonryList from "@react-native-seoul/masonry-list";
import MomentCard from "@/components/MomentCard";
import { MomentItem } from "@/components/MomentCard";
import MomentModel from "@/models/moment";

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#535353" }}
    style={{ backgroundColor: "#fff" }}
    labelStyle={{ color: "#000" }}
  />
);
type TabProp = {
  momentList: MomentItem[];
};
const TabViewComponent: FC<TabProp> = ({ momentList }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation();
  const [routes] = React.useState([
    { key: "moment", title: "内容" },
    { key: "user", title: "用户" },
  ]);
  const onSenceChange = (i: number) => {
    setIndex(i);
  };
  const MomentResult = () => {
    const toUserProfile = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
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
      <Box style={{ flex: 1 }}>
        <MasonryList
          keyExtractor={(item: MomentItem): string => item.id}
          contentContainerStyle={{
            paddingHorizontal: 10,
            alignSelf: "stretch",
            justifyContent: "space-between",
          }}
          numColumns={2}
          data={momentList as unknown[]}
          renderItem={renderItem}
        />
      </Box>
    );
  };

  const UserResult = () => <Box style={{ flex: 1 }}></Box>;

  const renderScene = SceneMap({
    moment: MomentResult,
    user: UserResult,
  });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={onSenceChange}
      renderTabBar={renderTabBar}
      initialLayout={{ width: layout.width }}
      style={{
        backgroundColor: "#fff",
      }}
    />
  );
};
export default memo(TabViewComponent);
