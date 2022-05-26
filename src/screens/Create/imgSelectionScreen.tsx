import React, { useMemo } from "react";
import { View, StyleSheet, SafeAreaView, Alert } from "react-native";
import { AssetsSelector } from "expo-images-picker";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MediaType } from "expo-media-library";
import { theme } from "@/constants";
import { useNavigation } from "@react-navigation/native";

export default function ImgPicker() {
  const navigation = useNavigation();

  const onSuccess = (data: any) => {
    // Alert.alert("Done", data.length + "Images selected");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    navigation.navigate("createIndex", { imgList: data });
  };

  const widgetErrors = useMemo(
    () => ({
      errorTextColor: "black",
      errorMessages: {
        hasErrorWithPermissions: "Please Allow media gallery permissions.",
        hasErrorWithLoading: "There was an error while loading images.",
        hasErrorWithResizing: "There was an error while loading images.",
        hasNoAssets: "No images found.",
      },
    }),
    []
  );

  const widgetSettings = useMemo(
    () => ({
      getImageMetaData: false, // true might perform slower results but gives meta data and absolute path for ios users
      initialLoad: 100,
      assetsType: [MediaType.photo, MediaType.video],
      minSelection: 1,
      maxSelection: 9,
      portraitCols: 4,
      landscapeCols: 4,
    }),
    []
  );

  // const widgetResize = useMemo(
  //   () => ({
  //     width: 50,
  //     compress: 0.7,
  //     base64: false,
  //     saveTo: "jpeg",
  //   }),
  //   []
  // );

  const _textStyle = {
    color: "white",
  };

  const _buttonStyle = {
    backgroundColor: theme.colors.primary_s,
    height: 30,
    width: 60,
    borderRadius: 20,
  };

  const widgetNavigator = useMemo(
    () => ({
      Texts: {
        finish: "完成",
        back: "取消",
        selected: "选择",
      },
      midTextColor: "white",
      minSelection: 1,
      buttonTextStyle: _textStyle,
      buttonStyle: _buttonStyle,
      onBack: () => {
        navigation.goBack();
      },
      onSuccess: (e: any) => onSuccess(e),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const widgetStyles = useMemo(
    () => ({
      margin: 2,
      bgColor: theme.colors.black2,
      spinnerColor: "blue",
      widgetWidth: 99,
      videoIcon: {
        Component: Ionicons,
        iconName: "ios-videocam",
        color: "tomato",
        size: 20,
      },
      selectedIcon: {
        Component: Ionicons,
        iconName: "ios-checkmark-circle-outline",
        color: "white",
        bg: "#7a7a7a6e",
        size: 26,
      },
    }),
    []
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <AssetsSelector
            Settings={widgetSettings}
            Errors={widgetErrors}
            Styles={widgetStyles}
            Navigator={widgetNavigator}
            // Resize={widgetResize} know how to use first , perform slower results.
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black2,
  },
});
