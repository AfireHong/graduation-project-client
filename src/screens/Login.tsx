import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [btnColor, setBtnColor] = useState("rgba(255,86,120, .3)");
  const loginClick = () => {
    if (!username || !password) {
      console.log("请完善登录信息");
    }
  };
  useEffect(() => {
    if (username !== "" && password !== "") {
      setBtnColor("#FF5678");
    }
  });
  return (
    <ImageBackground
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      source={require("../assets/images/login_bg.png")}
    >
      <View>
        <Text style={{ fontSize: 30, marginBottom: 90, color: "#636e72" }}>
          Poetry
        </Text>
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
        ></TextInput>
      </View>
      <View style={{ marginBottom: 50 }}>
        <TextInput
          style={styles.usernameInput}
          placeholder="密码"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        ></TextInput>
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
        <Text style={{ textAlign: "center", marginTop: 20 }}>其他登录方式</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
