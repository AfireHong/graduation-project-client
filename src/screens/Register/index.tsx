import React, {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import STATUSBAR_HEIGHT from "../../utlis/getStatusBarHeight";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Props } from "@/typings/navigation";
import { FC, useRef, useEffect, useCallback, useState } from "react";
import Text from "@/components/Text";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { theme } from "@/constants";
import index from "@/models";
import encryptStr from "@/utlis/encryptStr";
import Toast from "react-native-root-toast";
import { setStorage } from "@/utlis/storage";

const indexModel = new index();

const Register: FC<Props> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const moveAnim = useRef(new Animated.Value(100)).current;
  const formAniShow = useRef(new Animated.Value(0)).current;
  const [acount, setAcount] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [aniFinished, setAniStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const returnWelcome = () => {
    console.log("返回");
    navigation.goBack("welcome");
  };
  const startAni = useCallback(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(moveAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(formAniShow, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      setAniStatus(finished);
    });
  }, [fadeAnim, moveAnim, formAniShow]);
  const hasErrors = (key: string) =>
    errors.includes(key) ? styles.hasErrors : null;

  const valiHandle = () => {
    const error = [];
    if (!acount) error.push("acount");
    if (!nickname) error.push("nickname");
    if (!password) error.push("password");
    if (!repassword) error.push("repassword");
    setErrors(error);
    if (error.length) return false;
    return true;
  };

  const handleSign = async () => {
    if (!valiHandle()) {
      return false;
    }

    setLoading(true);
    const reqData = {
      nickname,
      acount,
      password: encryptStr(password),
    };
    const res = await indexModel.signUp(reqData);
    if (res?.success) {
      Toast.show("注册成功！为您自动登录", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
      });
      setStorage("token", res.data.token);
      setStorage("userInfo", res.data.userInfo);
      navigation.navigate("Index");
    } else {
      Toast.show(res?.msg ?? "注册失败！", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
      });
    }
    setLoading(false);
  };
  useEffect(() => {
    startAni();
  }, [startAni]);
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: "center",
      }}
      behavior="padding"
    >
      <ImageBackground
        style={styles.bgImage}
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
        <Animated.View
          style={{
            opacity: fadeAnim,
            position: "absolute",
            transform: [{ translateY: moveAnim }],
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            开启你的小时光
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            opacity: formAniShow,
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text bold h1 style={{ marginBottom: 40 }}>
            注册
          </Text>
          <Input
            label="账户名-将作为您的唯一凭证"
            style={[styles.input, hasErrors("acount")]}
            error={hasErrors("acount")}
            value={acount}
            onChangeText={(text: string) => setAcount(text)}
          />
          <Input
            label="昵称"
            style={[styles.input, hasErrors("nickname")]}
            error={hasErrors("nickname")}
            value={nickname}
            onChangeText={(text: string) => setNickname(text)}
          />
          <Input
            label="密码"
            secure
            error={hasErrors("password")}
            style={[styles.input, hasErrors("password")]}
            value={password}
            onChangeText={(text: string) => setPassword(text)}
          />
          <Input
            label="确认密码"
            secure
            error={hasErrors("repassword")}
            style={[styles.input, hasErrors("repassword")]}
            value={repassword}
            onChangeText={(text: string) => setRePassword(text)}
          />
          <Button
            gradient
            style={{
              width: 300,
            }}
            onPress={() => handleSign()}
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                注册
              </Text>
            )}
          </Button>
        </Animated.View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 20,
    width: 300,
    marginTop: 20,
    paddingBottom: 10,
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
