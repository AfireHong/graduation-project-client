import React, { View, Text, TouchableOpacity } from "react-native";
import { useState, useCallback, useEffect, FC } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getStorage } from "@/utlis/storage";
import { Props } from "@/typings/navigation";
import UserInfo from "@/components/UserDetail/index";
import styles from "@/components/UserDetail/styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Operate: FC = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity>
        <FontAwesome name={"navicon"} size={24} color={"#fff"} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name={"share-square-o"} size={24} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
};

const Mine: FC<Props> = ({ navigation }) => {
  const goSetting = () => {
    navigation.navigate("Setting");
  };

  const [userInfo, setUserInfo] = useState<userInfo>();
  const getUserInfo = useCallback(async () => {
    const info = await getStorage("userInfo");
    setUserInfo(info);
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);
  return (
    <UserInfo TopTools={Operate}>
      <View style={styles.editInfo}>
        <TouchableOpacity style={styles.editInfoBtn}>
          <Text style={styles.editInfoBtnTxt}>编辑资料</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editSettingBtn} onPress={goSetting}>
          <AntDesign name={"setting"} size={18} color={"#eee"} />
        </TouchableOpacity>
      </View>
    </UserInfo>
  );
};

export default Mine;
