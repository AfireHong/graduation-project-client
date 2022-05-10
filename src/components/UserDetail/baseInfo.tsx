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

const BaseInfo: FC = (props) => {
  return (
    <View style={styles.baseInfo}>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <View style={styles.avatar}>
        <View>
          <Image
            style={styles.avatarImg}
            source={{ uri: "https://afirehong.cn/i.png" }}
          />
        </View>
        <View style={styles.baseName}>
          <Text style={styles.nickName}>饼干</Text>
          <Text style={styles.userId}>ID: TEST123456</Text>
        </View>
      </View>
      <View style={styles.intro}>
        <Text style={styles.introText}>简单介绍一下自己吧</Text>
        <AntDesign name={"edit"} color={"#eee"} size={14} />
      </View>
      <View style={styles.third}>
        <View style={styles.trendView}>
          <TouchableOpacity style={styles.trend}>
            <Text style={styles.trendNumText}>20</Text>
            <Text style={styles.trendDescText}>关注</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trend}>
            <Text style={styles.trendNumText}>12</Text>
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
