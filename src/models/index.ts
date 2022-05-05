import HTTP from "../utlis/http";

export default class index extends HTTP {
  getBaseInfo() {
    return this.fetchData("/test");
  }
  login(data: userReq) {
    return this.fetchData<{ userInfo: userInfo; token: string }>(
      "/user/login",
      data,
      "post"
    );
  }
  signUp(data: userReq) {
    return this.fetchData<{ userInfo: userInfo; token: string }>(
      "/user/signUp",
      data,
      "post"
    );
  }
  verifyUser() {
    return this.fetchData("/user/verify");
  }
}
