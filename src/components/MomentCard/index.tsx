import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { memo, FC, useMemo } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "@/constants/theme";
import { useNavigation } from "@react-navigation/native";

export interface MomentItem {
  title: string;
  userNickname: string;
  userAvatar: string;
  coverImg: string;
  likes: number;
  id: string;
  userId: string;
}
const MomentCard: FC<{ item: MomentItem; userClick?: () => void }> = memo(
  ({ item, userClick }) => {
    const navigation = useNavigation();
    const { title, userAvatar, userNickname, coverImg, likes, id } = item;
    const randomBool = useMemo(() => Math.random() < 0.5, []);
    const toMoment = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      navigation.navigate("Moment", {
        id,
      });
    };
    return (
      <View style={styles.cardWrap}>
        <TouchableOpacity onPress={() => toMoment()}>
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
        </TouchableOpacity>

        <View style={styles.profile}>
          <TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
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
                  width: 70,
                }}
                numberOfLines={1}
                ellipsizeMode={"tail"}
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
    backgroundColor: "white",
    marginBottom: 8,
    width: "97%",
  },
  profile: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: "#000000",
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
