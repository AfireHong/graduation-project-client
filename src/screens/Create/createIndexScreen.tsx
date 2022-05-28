import React, {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { FC, useState, useEffect, useRef, useCallback } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { theme } from "@/constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Input,
  TextArea,
  Button,
  ScrollView,
  Modal,
  useToast,
} from "native-base";

const CreateScreen: FC = () => {
  const [images, setImages] = useState<Record<string, string>[]>([]);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const Toast = useToast();
  const [aniStatus, setAniStatus] = useState(false);
  // 动画
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const moveAnim = useRef(new Animated.Value(200)).current;
  const startAni = useCallback(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(moveAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      setAniStatus(finished);
    });
  }, [fadeAnim, moveAnim]);
  const returnStack = () => {
    navigation.goBack();
  };
  const toPickImg = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigation.navigate("imgPicker");
  };

  const submit = () => {
    Toast.show({
      description: "发布成功！",
      placement: "top",
    });
  };

  useEffect(() => {
    const imgs = (route?.params as Record<string, any>)?.imgList || [];
    if (imgs) {
      console.log(imgs);
      setImages(imgs);
    } else {
      setImages([]);
    }
    startAni();
  }, [route, startAni]);
  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
        transform: [{ translateY: moveAnim }],
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          height: "100%",
        }}
      >
        <View style={style.top}>
          <TouchableOpacity onPress={() => returnStack()}>
            <AntDesign name={"arrowleft"} size={30} color={"black"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <AntDesign name={"infocirlceo"} size={26} color={"#737373"} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <ScrollView horizontal={true}>
            <View style={style.imgList}>
              {images.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      position: "relative",
                      paddingTop: 10,
                    }}
                  >
                    <Image source={{ uri: item?.uri }} style={style.imgStyle} />

                    <TouchableOpacity
                      style={{
                        position: "relative",
                        left: 70,
                        bottom: Dimensions.get("window").width * 0.24,
                      }}
                    >
                      <AntDesign name={"closecircle"} size={15} />
                    </TouchableOpacity>
                  </View>
                );
              })}
              {images.length < 9 && (
                <TouchableOpacity
                  style={[
                    style.imgStyle,
                    {
                      borderWidth: 1,
                      borderColor: "#bebebe",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 10,
                    },
                  ]}
                  onPress={() => toPickImg()}
                  activeOpacity={0.9}
                >
                  <Text>
                    <FontAwesome name={"plus"} color={"#9f9f9f"} size={20} />
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <Input
            pl={3}
            _input={{
              style: {
                color: "black",
                fontSize: 18,
              },
            }}
            _focus={{
              borderBottomColor: "#eee",
            }}
            variant="underlined"
            placeholder="输入一段标题吧"
          />
          <TextArea
            mt={4}
            borderWidth={0}
            bg={"#eaeaea"}
            h={40}
            _focus={{
              bg: "#dbdbdb",
              borderBottomColor: "#000000",
              borderBottomWidth: 0,
            }}
            placeholder="输入一段描述吧"
            color={"black"}
            _input={{
              style: {
                color: "black",
                fontSize: 18,
              },
            }}
          />
          <Button
            mt={4}
            width={20}
            p={1}
            style={{
              borderRadius: 20,
            }}
            bg="#c6c6c6"
            _text={{
              style: {
                color: "#545454",
              },
            }}
            _pressed={{
              style: {
                backgroundColor: "#aeaeae",
                borderRadius: 20,
              },
            }}
          >
            #添加话题
          </Button>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            position: "absolute",
            bottom: 50,
            width: "100%",
          }}
        >
          <Button colorScheme="secondary" onPress={() => submit()}>
            发布
          </Button>
        </View>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.Body
              style={{
                borderWidth: 0,
                flex: 1,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  发布小贴士
                </Text>
              </View>
              <View>
                <Text>1、请发布正能量、真实、原创内容;</Text>
                <Text>2、禁止冒充他人身份或搬运他人作品;</Text>
                <Text>3、禁止标题党行为;</Text>
                <Text>
                  4、禁止在内容中添加网址、联系方式、二维码或售卖物品;
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{
                    width: "40%",
                    marginTop: 20,
                    backgroundColor: "#dd6969",
                  }}
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  我知道了
                </Button>
              </View>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </SafeAreaView>
    </Animated.View>
  );
};

export default CreateScreen;

const style = StyleSheet.create({
  top: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  imgStyle: {
    width: Dimensions.get("window").width * 0.2,
    height: Dimensions.get("window").width * 0.2,
    marginBottom: 10,
    marginRight: 12,
  },
  addImgBtn: {
    height: 100,
  },
  imgList: {
    flexDirection: "row",
  },
});
