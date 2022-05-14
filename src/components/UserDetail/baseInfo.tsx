import { FC } from "react";
import React, {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import { Props } from "@/typings/navigation";

interface IbaseInfo {
  userInfo?: userInfo;
}
const BaseInfo: FC<Props & IbaseInfo> = (props) => {
  const { navigation, userInfo } = props;
  const goSocial = () => {
    navigation.navigate("Social");
  };

  return (
    <View style={styles.baseInfo}>
      <View style={styles.avatar}>
        <View>
          <Image
            style={styles.avatarImg}
            source={{ uri: userInfo?.user_avatar }}
          />
        </View>
        <View style={styles.baseName}>
          <Text style={styles.nickName}>{userInfo?.user_nickname}</Text>
          <Text style={styles.userId}>ID: {userInfo?.user_acount}</Text>
        </View>
      </View>
      <View style={styles.intro}>
        <Text style={styles.introText}>简单介绍一下自己吧</Text>
        <AntDesign name={"edit"} color={"#eee"} size={14} />
      </View>
      <View style={styles.third}>
        <View style={styles.trendView}>
          <TouchableOpacity style={styles.trend} onPress={goSocial}>
            <Text style={styles.trendNumText}>{userInfo?.followingNum}</Text>
            <Text style={styles.trendDescText}>关注</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trend} onPress={goSocial}>
            <Text style={styles.trendNumText}>{userInfo?.followersNum}</Text>
            <Text style={styles.trendDescText}>粉丝</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trend}>
            <Text style={styles.trendNumText}>0</Text>
            <Text style={styles.trendDescText}>获赞与收藏</Text>
          </TouchableOpacity>
        </View>
        {props.children}
      </View>
    </View>
  );
};

export default BaseInfo;
