import Main from "@/main";
import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { NativeBaseProvider } from "native-base";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <RootSiblingParent>
        <NativeBaseProvider>
          <Main />
        </NativeBaseProvider>
      </RootSiblingParent>
    </RecoilRoot>
  );
}
