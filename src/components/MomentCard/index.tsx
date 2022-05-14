import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { memo, FC, useMemo } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "@/constants/theme";

export interface MomentItem {
  title: string;
  userNickname: string;
  userAvatar: string;
  coverImg: string;
  likes: number;
  id: string;
}
const MomentCard: FC<{ item: MomentItem; userClick: () => void }> = memo(
  ({ item, userClick }) => {
    const { title, userAvatar, userNickname, coverImg, likes } = item;
    const randomBool = useMemo(() => Math.random() < 0.5, []);
    return (
      <View style={styles.cardWrap}>
        <Image
          source={{
            uri: coverImg,
          }}
          style={{
            height: randomBool ? 150 : 280,
            alignSelf: "stretch",
          }}
          resizeMode="cover"
        />
        <View style={styles.profile}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.info}>
            <TouchableOpacity style={styles.user} onPress={userClick}>
              <Image
                source={{
                  uri: userAvatar,
                }}
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 20,
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  marginLeft: 4,
                  fontSize: 12,
                  color: "#7f7f7f",
                }}
              >
                {userNickname}
              </Text>
            </TouchableOpacity>
            <View style={styles.like}>
              <FontAwesome name={"heart-o"} color={"#7f7f7f"} />
              <Text
                style={{
                  color: "#7f7f7f",
                  fontSize: 12,
                  marginLeft: 4,
                }}
              >
                {likes}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  cardWrap: {
    backgroundColor: colors.black2,
    marginBottom: 8,
    width: "97%",
  },
  profile: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: "#fff",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    alignItems: "center",
  },
  like: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MomentCard;
