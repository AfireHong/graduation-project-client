import React, { View, Text, SafeAreaView, StatusBar } from "react-native";
// import { WebView } from "react-native-webview";
const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Text>主页</Text>
      </View>
    </SafeAreaView>
    // <WebView
    //   source={{ uri: "https://afirehong.cn" }}
    //   style={{ marginTop: 20 }}
    // />
  );
};

export default Home;
