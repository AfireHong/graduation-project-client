import React, { FC } from "react";
import User from "@/components/UserDetail";
import { View, TouchableOpacity } from "react-native";
import { Props, RootStackParamList } from "@/typings/navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Button from "@/components/Button";
import Text from "@/components/Text";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRoute, RouteProp } from "@react-navigation/native";

type userProps = RouteProp<RootStackParamList, "User">;

const Profile: FC<Props> = (props) => {
  const { navigation } = props;
  const route = useRoute<userProps>();

  const Operate: FC = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-left"} size={24} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name={"share-square-o"} size={24} color={"#fff"} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <User TopTools={Operate} {...props} id={route.params.id}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: "red",
            paddingLeft: 30,
            paddingRight: 30,
            height: 30,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text white>关注</Text>
        </Button>
        <Button
          style={{
            borderWidth: 1,
            borderColor: "white",
            height: 30,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 20,
            marginLeft: 16,
          }}
        >
          <AntDesign color={"white"} name={"message1"} />
        </Button>
      </View>
    </User>
  );
};

export default Profile;
