import React, {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FC, useState, useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { theme } from "@/constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Input, TextArea, Button, ScrollView } from "native-base";

const CreateScreen: FC = () => {
  const [images, setImages] = useState<Record<string, string>[]>([]);
  const navigation = useNavigation();
  const route = useRoute();
  const returnStack = () => {
    navigation.goBack();
  };
  const toPickImg = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigation.navigate("imgPicker");
  };
  useEffect(() => {
    const imgs = (route?.params as Record<string, any>)?.imgList || [];
    if (imgs) {
      console.log(imgs);
      setImages(imgs);
    } else {
      setImages([]);
    }
  }, [route]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: theme.colors.black2,
      }}
    >
      <View style={style.top}>
        <TouchableOpacity onPress={() => returnStack()}>
          <AntDesign name={"arrowleft"} size={30} color={"white"} />
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
                <Image
                  key={index}
                  source={{ uri: item?.uri }}
                  style={style.imgStyle}
                />
              );
            })}
            {images.length < 9 && (
              <TouchableOpacity
                style={[
                  style.imgStyle,
                  {
                    borderWidth: 1,
                    borderColor: "#343434",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
                onPress={() => toPickImg()}
                activeOpacity={0.9}
              >
                <Text>
                  <FontAwesome name={"plus"} color={"#fff"} size={20} />
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
              color: "white",
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
          bg={"#202020"}
          h={40}
          _focus={{
            bg: "#353535",
            borderBottomColor: "#eee",
            borderBottomWidth: 0,
          }}
          placeholder="输入一段描述吧"
          color={"white"}
          _input={{
            style: {
              color: "white",
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
          bg="warmGray.700"
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
        <Button colorScheme="secondary">发布</Button>
      </View>
    </SafeAreaView>
  );
};

export default CreateScreen;

const style = StyleSheet.create({
  top: {
    paddingHorizontal: 10,
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
