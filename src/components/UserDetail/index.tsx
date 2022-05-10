import { FC } from "react";
import React, { View } from "react-native";
import BaseInfo from "./baseInfo";
import MomentDetail from "./tabcontent";
import styles from "./styles";
const User: FC<{ TopTools?: FC }> = (props) => {
  const { TopTools } = props;
  return (
    <View style={styles.user}>
      <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
        {TopTools && <TopTools />}
      </View>
      <BaseInfo>{props.children}</BaseInfo>
      <MomentDetail />
    </View>
  );
};

export default User;
