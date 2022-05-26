import Main from "@/main";
import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <RootSiblingParent>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </RootSiblingParent>
  );
}
