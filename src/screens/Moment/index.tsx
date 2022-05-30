import React, { FC, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { Box, Text, Button, Input, Modal, TextArea } from "native-base";
import { Props } from "@/typings/navigation";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { ImageSwiper } from "@/components/Swiper";

const MomentScreen: FC<Props> = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const showKeyboard = () => {
    setShowModal(true);
  };
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: "center",
      }}
      behavior="padding"
    >
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
                      uri: "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
                    }}
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 15,
                    }}
                    resizeMode="cover"
                  />
                  <Text ml={2} color={"black"} fontWeight={400} fontSize={16}>
                    用户昵称
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
              <ImageSwiper
                images={[
                  "http://sns-img-qc.xhscdn.com/01024i01kotqbr6vhi90116f7uy0yea8gw?imageView2/2/w/540/format/jpg/q/75",
                  "http://sns-img-qc.xhscdn.com/01024b01kg74u8l7lhg0101nd728bd4rld?imageView2/2/w/1080/format/webp",
                ]}
              />
            </Box>
            <Box p={4}>
              <Text fontSize={18} fontWeight={600}>
                标题内容标题内容标题内容标题内容标题内容
              </Text>
              <Text fontSize={16}>
                主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容主体内容
              </Text>
              <Text fontSize={13} mt={10} color={"#868686"}>
                发表于 2022-05-05 19:23
              </Text>
            </Box>
            <Box p={4}>
              <Text>共10条评论</Text>
              <Box mt={3} flexDirection={"row"}>
                <Image
                  source={{
                    uri: "https://sns-avatar-qc.xhscdn.com/avatar/6187dc6fd4a81ef0b1954388.jpg?imageView2/2/w/80/format/jpg",
                  }}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 15,
                  }}
                  resizeMode="cover"
                />
                {/* <Input
                  ml={4}
                  flex={1}
                  borderRadius={20}
                  background={"#eee"}
                  borderColor={"#d5d5d5"}
                  _focus={{
                    backgroundColor: "#eee",
                    borderColor: "#d5d5d5",
                  }}
                />
                <Button
                  borderRadius={20}
                  ml={2}
                  bg={"#f76161"}
                  _pressed={{
                    backgroundColor: "#f28181",
                  }}
                >
                  评论
                </Button> */}
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
          </Box>
        </ScrollView>
      </SafeAreaView>
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
            <Button
              width={"100%"}
              onPress={() => {
                setShowModal(false);
              }}
            >
              发布
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </KeyboardAvoidingView>
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
