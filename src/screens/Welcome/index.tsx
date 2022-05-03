import React, {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FC } from "react";
import { Props } from "@/typings/navigation";

const WelCome: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageStyle}
        source={require("../../assets/images/commonBg.png")}
      >
        <View>
          <ImageBackground
            style={{
              width: 200,
              height: 80,
              marginBottom: 300,
            }}
            source={require("../../assets/images/logo.png")}
          />
        </View>
        <View style={styles.operation}>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF5678",
              paddingTop: 16,
              paddingBottom: 16,
              width: "60%",
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              注 册
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 20,
              paddingTop: 16,
              paddingBottom: 16,
              width: "60%",
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#FF5678",
              borderWidth: 1,
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                color: "#FF5678",
              }}
            >
              登 录
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelCome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  operation: {
    marginBottom: 160,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
