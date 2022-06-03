import React, {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
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
  {
    id: "10",
    keywords: "热门第一条",
  },
  {
    id: "11",
    keywords: "热门第一条",
  },
  {
    id: "12",
    keywords: "热门第一条",
  },
  {
    id: "13",
    keywords: "热门第一条",
  },
];

const HotRank: FC = memo(() => {
  const handleColor = (index: number) => {
    switch (index) {
      case 0:
        return "rgb(238, 113, 132)";
        break;
      case 1:
        return "rgb(243, 178 ,95)";
        break;
      case 2:
        return "rgb(249, 219, 100)";
      default:
        return "#fff";
    }
  };
  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}
    >
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
        {rankList.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#e5e5e5",
                paddingVertical: 18,
                flexDirection: "row",
                alignItems: "center",
              }}
              activeOpacity={0.9}
            >
              <Entypo
                name={"dot-single"}
                color={handleColor(index)}
                size={20}
              />
              <Text
                style={{
                  color: "black",
                  marginLeft: 4,
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

const DiscoverScreen: FC<Props> = ({ navigation }) => {
  const [searchStr, setSearchStr] = useState("");
  const searchHandle = () => {
    navigation.navigate("searchResult", {
      param: searchStr,
    });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
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
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => searchHandle()}
        >
          <Text
            style={{
              color: "black",
            }}
          >
            搜索
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.associative}>
          <View style={styles.associativeTitle}>
            <Text
              style={{
                color: "black",
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
                      color: "black",
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    height: 56,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  inpurtWrap: {
    backgroundColor: "#dbdbdb",
    width: "80%",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    paddingBottom: 20,
  },
  serachInput: {
    color: "#1c1c1c",
    height: "100%",
    fontSize: 16,
    minHeight: 36,
    paddingLeft: 4,
  },
  searchBtn: {
    backgroundColor: "#e1e1e1",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    height: 36,
    borderRadius: 20,
  },
  associative: {
    // marginTop: 20,
    paddingHorizontal: 10,
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
