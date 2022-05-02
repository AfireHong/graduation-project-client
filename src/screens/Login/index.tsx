import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, FC } from "react";
// import { useFonts } from "expo-font";
import { Props } from "@/typings/navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import STATUSBAR_HEIGHT from "../../utlis/getStatusBarHeight";
import Toast from "react-native-root-toast";

const Login: FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [btnColor, setBtnColor] = useState("rgba(255,86,120, .3)");
  const loginClick = () => {
    // navigation.navigate("Index");
    Toast.show("登录成功", {
      duration: Toast.durations.SHORT,
      position: Toast.positions.CENTER,
    });
    if (!username || !password) {
      console.log("请完善登录信息");
    }
  };
  // const [loaded] = useFonts({
  //   LongCang: require("../../../assets/fonts/LongCang-Regular.ttf"),
  // });
  useEffect(() => {
    if (username !== "" && password !== "") {
      setBtnColor("#FF5678");
    }
  }, [username, password]);

  const returnWelcome = () => {
    console.log("返回");
    navigation.goBack("welcome");
  };
  return (
    <View style={styles.loginContainer}>
      <ImageBackground
        style={styles.imageStyle}
        source={require("../../assets/images/login_bg.png")}
      >
        <View
          style={{
            position: "absolute",
            top: STATUSBAR_HEIGHT + 30,
            left: 20,
          }}
        >
          <TouchableOpacity onPress={() => returnWelcome()}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(255,86,120,0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <FontAwesome name={"arrow-left"} size={20} color={"#FF5678"} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <ImageBackground
            style={{ width: 150, height: 50, marginBottom: 80 }}
            source={require("../../assets/images/logo.png")}
          />
        </View>
        <View style={styles.loginTitle}>
          <Text
            style={{
              marginLeft: 40,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            欢迎登录
          </Text>
        </View>
        <View style={{ margin: 30 }}>
          <TextInput
            style={styles.usernameInput}
            placeholder="用户名"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={{ marginBottom: 50 }}>
          <TextInput
            style={styles.usernameInput}
            placeholder="密码"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 311,
            height: 52,
            borderRadius: 40,
            backgroundColor: btnColor,
          }}
          onPress={loginClick}
        >
          <Text style={styles.loginBtnText}>登录</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 70 }}>
          <Text style={{ textAlign: "center", color: "#636e72" }}>or</Text>
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            其他登录方式
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  imageStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  loginBtnText: {
    textAlign: "center",
    lineHeight: 52,
    color: "#fff",
  },
  usernameInput: {
    height: 40,
    borderColor: "gray",
    width: 311,
    borderBottomWidth: 1,
    borderBottomColor: "#bdc3c7",
  },
});
export default Login;
