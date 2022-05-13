import HTTP from "../utlis/http";

export default class user extends HTTP {
  userInfo(data: getUserInfoReq) {
    return this.fetchData("/user/userInfo", data);
  }
  followList(data: getUserInfoReq) {
    return this.fetchData<followListRsp>("/user/followList", data);
  }
}
