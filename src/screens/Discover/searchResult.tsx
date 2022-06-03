import React, {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FC, useLayoutEffect, useState, useCallback, useEffect } from "react";
import { Box, Input, Button } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import TabViewComponent from "./tabView";
import { DiscoverStackParamList } from "./index";
import type { RouteProp } from "@react-navigation/native";
import { MomentItem } from "@/components/MomentCard";
import MomentModel from "@/models/moment";

const momentModel = new MomentModel();

type searchResultProp = RouteProp<DiscoverStackParamList, "searchResult">;

const useMoment = () => {
  const [momentList, setMomentList] = useState<MomentItem[]>([]);
  const [pageInfo, setPageInfo] = useState<pageInfoI>({
    pageIndex: 1,
    pageSize: 10,
  });
  const getMoment = useCallback(
    async (keywords: string) => {
      const res = await momentModel.search({
        ...pageInfo,
        keywords,
      });
      if (res?.success) {
        const { list } = res.data;
        const listData = list.map((item) => {
          return {
            id: item.moment_id,
            userNickname: item.userInfo.nickname,
            title: item.moment_title,
            userAvatar: item.userInfo.avatar,
            coverImg: item.moment_images[0],
            likes: item.moment_like_nums,
            userId: item.userInfo.user_id,
          };
        });
        setMomentList(listData);
      }
    },
    [pageInfo]
  );
  return {
    momentList,
    setPageInfo,
    getMoment,
  };
};

const SearchResult: FC = () => {
  const navigation = useNavigation();
  const route = useRoute<searchResultProp>();
  const [searchParam, setSearchParam] = useState(route.params.param);
  const { momentList, getMoment } = useMoment();
  useEffect(() => {
    getMoment(searchParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  });

  const btnClick = () => {
    getMoment(searchParam);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Box paddingX={2} style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={"arrowleft"} size={30} color={"black"} />
        </TouchableOpacity>
        <Input
          flex={1}
          borderRadius={20}
          height={36}
          value={searchParam}
          onChangeText={(text) => setSearchParam(text)}
          borderWidth={0}
          bg={"#eee"}
          _focus={{
            style: {
              backgroundColor: "#d7d7d7",
              borderWidth: 0,
            },
          }}
        />
        <Button
          _text={{
            color: "#000",
          }}
          bg={"#e1e1e1"}
          borderRadius={20}
          ml={2}
          onPress={() => btnClick()}
          _pressed={{
            backgroundColor: "#eee",
          }}
        >
          搜索
        </Button>
      </Box>
      <Box flex={1}>
        <TabViewComponent momentList={momentList} />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
  },
});
export default SearchResult;
