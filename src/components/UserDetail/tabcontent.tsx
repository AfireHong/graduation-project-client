import React, {
  useState,
  ReactElement,
  useCallback,
  useEffect,
  FC,
} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import MasonryList from "@react-native-seoul/masonry-list";
import MomentCard from "@/components/MomentCard";
import { MomentItem } from "@/components/MomentCard";
import moment, { getMomentRsp } from "@/models/moment";
import { Box } from "native-base";
import { getStorage } from "@/utlis/storage";

const MomentModel = new moment();

const MomentDetail: FC<{ user_id?: string }> = ({ user_id }) => {
  const [curTab, setCurTab] = useState(0);
  const [userMoment, setUserMoment] = useState<MomentItem[]>([]);
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
  const getMyMoment = useCallback(async () => {
    let res: commonRsp<getMomentRsp[]> | undefined;
    if (user_id) res = await MomentModel.getUserMoment({ user_id });
    else res = await MomentModel.getUserMoment();
    console.log(user_id);

    if (res?.success) {
      const momentList: MomentItem[] = [];
      res.data.forEach((item) => {
        const momentItem = {
          id: item.moment_id,
          userNickname: item.userInfo.nickname,
          userAvatar: item.userInfo.avatar,
          coverImg: item.moment_images[0],
          likes: item.moment_like_nums,
          userId: item.userInfo.user_id,
          title: item.moment_title,
        };
        momentList.push(momentItem);
      });
      setUserMoment(momentList);
    }
  }, [user_id]);

  useEffect(() => {
    getMyMoment();
  }, [getMyMoment]);
  useEffect(() => {
    console.log(curTab);

    if (curTab === 0) {
      getMyMoment();
    }
    if (curTab === 1) {
      getStorage("collectMoment").then((res) => {
        console.log(res);

        setUserMoment(res);
        console.log(userMoment);
      });
    }
    if (curTab === 2) {
      getStorage("likeMoment").then((res) => {
        setUserMoment(res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curTab, getMyMoment]);
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
      <Box
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
        {userMoment.length > 0 ? (
          <MasonryList
            keyExtractor={(item: MomentItem): string => item?.id as string}
            contentContainerStyle={{
              paddingHorizontal: 10,
              alignSelf: "stretch",
              justifyContent: "space-between",
            }}
            numColumns={2}
            data={userMoment as unknown[]}
            renderItem={renderItem}
            onRefresh={() => getMyMoment()}
          />
        ) : (
          <TouchableOpacity onPress={() => getMyMoment()}>
            <Text
              style={{
                color: "#3c3c3c",
                marginTop: 40,
              }}
            >
              暂无内容
            </Text>
          </TouchableOpacity>
        )}
      </Box>
    </View>
  );
};

export default MomentDetail;
