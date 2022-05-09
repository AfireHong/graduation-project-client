import React, {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useLayoutEffect, FC } from "react";
import { Props } from "@/typings/navigation";
import AntDesign from "react-native-vector-icons/AntDesign";

const CreateScreen: FC<Props> = ({ navigation }) => {
  const returnStack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <View>
        <TouchableOpacity onPress={() => returnStack()}>
          <AntDesign name={"arrowleft"} size={30} />
        </TouchableOpacity>
      </View>
      <Text>新建</Text>
    </SafeAreaView>
  );
};

export default CreateScreen;
