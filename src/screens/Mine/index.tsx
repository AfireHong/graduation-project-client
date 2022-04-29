import React, {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import StatusBarHeight from "@/utlis/getStatusBarHeight";

const BaseInfo = () => {
  return (
    <View style={styles.baseInfo}>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <View style={styles.operate}>
        <TouchableOpacity>
          <FontAwesome name={"navicon"} size={24} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name={"share-square-o"} size={24} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={styles.avatar}>
        <View>
          <Image
            style={styles.avatarImg}
            source={{ uri: "https://afirehong.cn/i.png" }}
          />
        </View>
        <View style={styles.baseName}>
          <Text style={styles.nickName}>我是饼干</Text>
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
        <View style={styles.editInfo}>
          <TouchableOpacity style={styles.editInfoBtn}>
            <Text style={styles.editInfoBtnTxt}>编辑资料</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editSettingBtn}>
            <AntDesign name={"setting"} size={18} color={"#eee"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const MomentDetail = () => {
  const [curTab, setCurTab] = useState(0);
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
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#eee",
            marginTop: 40,
          }}
        >
          暂无内容
        </Text>
      </View>
    </View>
  );
};
const Mine = () => {
  return (
    <View style={styles.mine}>
      <BaseInfo />
      <MomentDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  baseInfo: {
    padding: 20,
  },
  operate: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  mine: {
    backgroundColor: "rgb(83,91,99)",
    height: "100%",
    paddingTop: StatusBarHeight,
  },
  avatar: {
    flexDirection: "row",
  },
  avatarImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 1,
    marginRight: 18,
  },
  baseName: {
    justifyContent: "space-evenly",
  },
  nickName: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 20,
  },
  userId: {
    color: "#eee",
    fontSize: 14,
  },
  intro: {
    marginTop: 10,
    flexDirection: "row",
  },
  introText: {
    color: "#eee",
    fontSize: 14,
  },
  third: {
    marginTop: 20,
    flexDirection: "row",

    justifyContent: "space-between",
  },
  trendView: {
    flexDirection: "row",
  },
  trend: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  trendNumText: {
    color: "#eee",
    fontWeight: "700",
  },
  trendDescText: {
    color: "#eee",
    marginTop: 4,
  },
  editInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  editInfoBtn: {
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    height: 30,
  },
  editInfoBtnTxt: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },
  editSettingBtn: {
    height: 30,
    marginLeft: 10,
    borderColor: "#fff",
    justifyContent: "center",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
  },
  momentDetail: {
    backgroundColor: "#000",
    height: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  detailTabView: {
    height: 50,
    width: "100%",
    backgroundColor: "rgb(27,25,31)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  tabText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    paddingBottom: 4,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#ff0033",
  },
});
export default Mine;
