import React, { SafeAreaView, StyleSheet } from "react-native";
import { FC } from "react";
import { Props } from "@/typings/navigation";
import { Box } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const MessageScreen: FC<Props> = () => {
  return (
    <SafeAreaView style={{ flex: 1, height: "100%", backgroundColor: "#fff" }}>
      <Box>
        <Box pt={4} flexDirection={"row"} justifyContent={"space-around"}>
          <Box
            style={[
              styles.iconStyle,
              {
                backgroundColor: "rgb(227,246,238)",
              },
            ]}
          >
            <FontAwesome
              name={"commenting"}
              size={24}
              color={"rgb(108,213,156)"}
            />
          </Box>
          <Box
            style={[
              styles.iconStyle,
              {
                backgroundColor: "rgb(246,213,212)",
              },
            ]}
          >
            <FontAwesome name={"heart"} size={24} color={"rgb(235,104,97)"} />
          </Box>
          <Box
            style={[
              styles.iconStyle,
              {
                backgroundColor: "rgb(222,232,251)",
              },
            ]}
          >
            <FontAwesome name={"user"} size={24} color={"rgb(77,132,246)"} />
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    padding: 20,
    width: 66,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MessageScreen;
