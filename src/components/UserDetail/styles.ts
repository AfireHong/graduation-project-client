import { StyleSheet } from "react-native";

import StatusBarHeight from "@/utlis/getStatusBarHeight";

const styles = StyleSheet.create({
  user: {
    backgroundColor: "rgb(83,91,99)",
    height: "100%",
    paddingTop: StatusBarHeight,
  },
  baseInfo: {
    padding: 20,
  },
  avatar: {
    flexDirection: "row",
  },
  avatarImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 1,
    marginRight: 18,
  },
  baseName: {
    justifyContent: "space-evenly",
  },
  nickName: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 20,
  },
  userId: {
    color: "#eee",
    fontSize: 14,
  },
  intro: {
    marginTop: 10,
    flexDirection: "row",
  },
  introText: {
    color: "#eee",
    fontSize: 14,
  },
  third: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trendView: {
    flexDirection: "row",
  },
  trend: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  trendNumText: {
    color: "#eee",
    fontWeight: "700",
  },
  trendDescText: {
    color: "#eee",
    marginTop: 4,
  },
  editInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  editInfoBtn: {
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    height: 30,
  },
  editInfoBtnTxt: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },
  editSettingBtn: {
    height: 30,
    marginLeft: 10,
    borderColor: "#fff",
    justifyContent: "center",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
  },
  momentDetail: {
    backgroundColor: "#eee",
    height: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  detailTabView: {
    height: 50,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  tabText: {
    color: "black",
    fontSize: 14,
    fontWeight: "800",
    paddingBottom: 4,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#ff0033",
  },
});

export default styles;
