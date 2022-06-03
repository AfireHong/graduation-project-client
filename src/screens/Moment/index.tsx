import React, { FC, useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Box, Text, Button, Toast, Modal, TextArea } from "native-base";
import { Props, RootStackParamList } from "@/typings/navigation";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ImageSwiper } from "@/components/Swiper";
import type { RouteProp } from "@react-navigation/native";
import Moment from "@/models/moment";
import { getMomentRsp } from "@/models/moment";
import { getStorage } from "@/utlis/storage";
import CommentModel, { comentListRsp } from "@/models/comment";
import moment from "moment";
const momentModel = new Moment();
const commentModel = new CommentModel();

type momentProps = RouteProp<RootStackParamList, "Moment">;

type commentProps = {
  user_avatar: string;
  user_nickname: string;
  user_id: string;
  content: string;
  create_time: string;
};
const CommentItem: FC<commentProps> = (props) => {
  const { user_avatar, user_nickname, content, create_time } = props;
  return (
    <Box flexDirection={"row"} mb={2}>
      <Box mr={2}>
        <Image
          style={{
            width: 34,
            height: 34,
            borderRadius: 15,
          }}
          resizeMode="cover"
          source={{ uri: user_avatar }}
        />
      </Box>
      <Box flex={1}>
        <Text color={"#878686"} fontSize={13}>
          {user_nickname}
        </Text>
        <Text flex={1} marginTop={1} fontSize={15} marginBottom={1}>
          {content}
        </Text>
        <Text color={"#878686"} fontSize={12}>
          {moment(Number(create_time)).format("YYYY-MM-DD HH:mm:ss a")}
        </Text>
      </Box>
    </Box>
  );
};

const useComment = (moment_id: string) => {
  const [comment, setComment] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [commentList, setCommentList] = useState<comentListRsp[]>([]);
  const publishComment = async (parent_id = "0") => {
    const res = await commentModel.create(comment, parent_id, moment_id);
    if (res?.success) {
      setShowModal(false);
      getComment();
      setComment("");
      Toast.show({
        description: "评论成功",
      });
    }
  };
  const getComment = useCallback(async () => {
    const res = await commentModel.list(moment_id);
    if (res?.success) {
      setCommentList(res.data);
    }
  }, [moment_id]);

  useEffect(() => {
    getComment();
  }, [getComment]);
  return {
    showModal,
    comment,
    commentList,
    setShowModal,
    setComment,
    publishComment,
    getComment,
  };
};

const MomentScreen: FC<Props & { id: string }> = () => {
  const navigation = useNavigation();
  const [momentInfo, setMomentInfo] = useState<getMomentRsp>();
  const route = useRoute<momentProps>();
  const getMoment = useCallback(async () => {
    const res = await momentModel.getMoment(route.params.id);
    console.log(res);
    if (res?.success) {
      setMomentInfo(res.data);
    }
  }, [route]);
  const [userInfo, setUserInfo] = useState<userInfo>();
  const getUserInfo = useCallback(async () => {
    const info = await getStorage("userInfo");
    setUserInfo(info);
  }, []);

  const {
    showModal,
    comment,
    commentList,
    setShowModal,
    setComment,
    publishComment,
  } = useComment(route.params.id);
  useEffect(() => {
    getMoment();
    getUserInfo();
  }, [getMoment, getUserInfo]);

  const showKeyboard = () => {
    setShowModal(true);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <Box bg={"#fff"}>
          <Box style={styles.header}>
            <Box>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.9}
              >
                <AntDesign name={"left"} size={32} />
              </TouchableOpacity>
            </Box>
            <Box
              ml={4}
              style={{
                flex: 1,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Image
                  source={{
                    uri: momentInfo?.userInfo.avatar,
                  }}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 15,
                  }}
                  resizeMode="cover"
                />
                <Text ml={2} color={"black"} fontWeight={400} fontSize={16}>
                  {momentInfo?.userInfo.nickname}
                </Text>
              </TouchableOpacity>
            </Box>
            <Box>
              <Button
                borderColor={"#f56969"}
                borderWidth={1}
                borderRadius={20}
                bg={"#ffffff"}
                height={30}
                pl={3}
                pt={0}
                pr={3}
                pb={0}
                _text={{
                  color: "#f56969",
                }}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
                _pressed={{
                  style: {
                    backgroundColor: "#fff",
                  },
                }}
              >
                关注
              </Button>
            </Box>
          </Box>
          <Box style={styles.imgs}>
            <ImageSwiper images={momentInfo?.moment_images || []} />
          </Box>
          <Box p={4}>
            <Text fontSize={18} fontWeight={600}>
              {momentInfo?.moment_title}
            </Text>
            <Text fontSize={16}>{momentInfo?.moment_content}</Text>
            <Text fontSize={13} mt={10} color={"#868686"}>
              发表于{" "}
              {moment(Number(momentInfo?.moment_create_at))
                .locale("zh-cn")
                .format("YYYY-MM-DD HH:mm:ss a")}
            </Text>
          </Box>
          <Box p={4}>
            <Text>共{commentList.length}条评论</Text>
            <Box mt={3} flexDirection={"row"}>
              <Image
                source={{
                  uri: userInfo?.user_avatar,
                }}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 15,
                }}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "#eee",
                  flex: 1,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: 10,
                }}
                activeOpacity={0.9}
                onPress={() => showKeyboard()}
              >
                <Box
                  _text={{
                    style: {
                      color: "#868686",
                    },
                  }}
                >
                  发表一些看法吧~
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>
          {/* 评论列表 */}
          <Box pl={4} pr={4} pt={2}>
            {commentList.length > 0
              ? commentList.map((item) => {
                  return (
                    <CommentItem
                      user_nickname={item.userInfo.nickname}
                      content={item.content || ""}
                      user_avatar={item.userInfo.avatar}
                      user_id={item.userInfo.user_id}
                      create_time={item.create_at}
                    />
                  );
                })
              : "暂无评论"}
            {}
          </Box>
        </Box>
      </ScrollView>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        avoidKeyboard
      >
        <Modal.Content width={Dimensions.get("screen").width} p={2}>
          <TextArea
            borderWidth={0}
            bg={"#eaeaea"}
            h={40}
            _focus={{
              bg: "#dbdbdb",
              borderBottomColor: "#000000",
              borderBottomWidth: 0,
            }}
            value={comment}
            onChangeText={(text) => setComment(text)}
            placeholder="说说你的看法吧"
            color={"black"}
            _input={{
              style: {
                color: "black",
                fontSize: 18,
              },
            }}
          />
          <Modal.Footer>
            <Button width={"100%"} onPress={() => publishComment()}>
              发布
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Box
        style={{
          height: 80,
        }}
        bg={"#fff"}
        borderTopWidth={1}
        borderTopColor={"#eee"}
        flexDirection={"row"}
        alignItems={"center"}
        paddingX={4}
        justifyContent={"space-around"}
      >
        <TouchableOpacity activeOpacity={0.9} onPress={() => showKeyboard()}>
          <Box
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              backgroundColor: "#eee",
              borderRadius: 20,
              width: 150,
            }}
            _text={{
              style: {
                color: "#868686",
              },
            }}
            flexDirection={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <FontAwesome
              name={"pencil"}
              style={{ marginRight: 6 }}
              color={"#868686"}
              size={14}
            />
            说点什么~
          </Box>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name={"hearto"} size={30} color={"#9a9a9a"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <AntDesign color={"#9a9a9a"} size={30} name={"staro"} />
          <Text ml={1} fontSize={18}>
            收藏
          </Text>
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imgs: {
    height: 280,
  },
});
export default MomentScreen;
