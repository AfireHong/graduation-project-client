import { FC, useCallback, useState, useEffect } from "react";
import React, { View } from "react-native";
import BaseInfo from "./baseInfo";
import MomentDetail from "./tabcontent";
import styles from "./styles";
import { Props } from "@/typings/navigation";
import user from "@/models/user";

const UserModel = new user();

const User: FC<{ TopTools?: FC; acount?: string } & Props> = (props) => {
  const { TopTools, acount } = props;
  const [userInfo, setUserInfo] = useState<userInfo>();
  const getUserInfo = useCallback(async () => {
    const res = await UserModel.userInfo({
      user_acount: acount as string,
    });
    if (res?.success) {
      setUserInfo(res.data);
    }
  }, [acount]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);
  return (
    <View style={styles.user}>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {TopTools && <TopTools />}
      </View>
      <BaseInfo userInfo={userInfo} {...props}>
        {props.children}
      </BaseInfo>
      <MomentDetail />
    </View>
  );
};

export default User;
