import React, {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FC, useState, memo } from "react";
import { Props } from "@/typings/navigation";
import { colors } from "@/constants/theme";
import Entypo from "react-native-vector-icons/Entypo";

const words = [
  {
    id: "1",
    keywords: "红烧肉怎么做",
  },
  {
    id: "2",
    keywords: "微信昵称",
  },
  {
    id: "3",
    keywords: "春季穿搭",
  },
  {
    id: "4",
    keywords: "理想汽车offer",
  },
  {
    id: "5",
    keywords: "春招",
  },
  {
    id: "6",
    keywords: "今天星期几",
  },
];

const rankList = [
  {
    id: "1",
    keywords: "热门第一条",
  },
  {
    id: "2",
    keywords: "热门第一条",
  },
  {
    id: "3",
    keywords: "热门第一条",
  },
  {
    id: "4",
    keywords: "热门第一条",
  },
  {
    id: "5",
    keywords: "热门第一条",
  },
  {
    id: "6",
    keywords: "热门第一条",
  },
  {
    id: "7",
    keywords: "热门第一条",
  },
  {
    id: "8",
    keywords: "热门第一条",
  },

  {
    id: "9",
    keywords: "热门第一条",
  },
];

const HotRank: FC = memo(() => {
  return (
    <View>
      <View
        style={{
          marginTop: 14,
        }}
      >
        <Text
          style={{
            color: "orange",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          热门榜单
        </Text>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        {rankList.map((item) => {
          return (
            <TouchableOpacity
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#292929",
                paddingVertical: 18,
              }}
              activeOpacity={0.9}
            >
              <Text
                style={{
                  color: colors.text,
                }}
              >
                {item.keywords}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
});

const DiscoverScreen: FC<Props> = () => {
  const [searchStr, setSearchStr] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        paddingHorizontal: 20,
      }}
    >
      <View style={styles.searchContainer}>
        <View style={styles.inpurtWrap}>
          <TextInput
            value={searchStr}
            style={styles.serachInput}
            onChangeText={(text) => setSearchStr(text)}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Text
            style={{
              color: "#fff",
            }}
          >
            搜索
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.associative}>
        <View style={styles.associativeTitle}>
          <Text
            style={{
              color: colors.text,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            猜你想搜
          </Text>
          <TouchableOpacity style={styles.switchBtn} activeOpacity={0.8}>
            <Entypo name={"cycle"} color={"rgb(109,112,121)"} />
            <Text style={styles.switchText}>换一换</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 18,
          }}
        >
          {words.map((item) => {
            return (
              <TouchableOpacity
                style={{
                  width: "50%",
                  paddingVertical: 8,
                }}
                key={item.id}
                activeOpacity={0.9}
              >
                <Text
                  style={{
                    color: colors.text,
                    fontSize: 16,
                  }}
                >
                  {item.keywords}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <HotRank />
    </SafeAreaView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    height: 36,
    width: "100%",
    justifyContent: "space-between",
  },
  inpurtWrap: {
    backgroundColor: "rgb(38,38,44)",
    width: "80%",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  serachInput: {
    color: "#fff",
    height: "100%",
    fontSize: 16,
  },
  searchBtn: {
    backgroundColor: colors.black2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  associative: {
    marginTop: 20,
  },
  associativeTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  switchBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchText: {
    color: "rgb(109,112,121)",
    marginLeft: 6,
  },
});
