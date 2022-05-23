import React, {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FC, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { theme } from "@/constants";
import { useNavigation } from "@react-navigation/native";

const CreateScreen: FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const navigation = useNavigation();
  const returnStack = () => {
    navigation.goBack();
  };
  const toPickImg = async () => {
    navigation.navigate("imgPicker");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, height: "100%", backgroundColor: theme.colors.black2 }}
    >
      <View>
        <TouchableOpacity onPress={() => returnStack()}>
          <AntDesign name={"arrowleft"} size={30} color={"white"} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={style.imgList}>
          {images.map((item, index) => {
            return (
              <Image
                key={index}
                source={{ uri: item }}
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
      </View>
    </SafeAreaView>
  );
};

export default CreateScreen;

const style = StyleSheet.create({
  imgStyle: {
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").width * 0.3,
    marginBottom: 10,
  },
  addImgBtn: {
    height: 100,
  },
  imgList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
