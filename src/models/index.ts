import HTTP from "../utlis/http";

export default class index extends HTTP {
  getBaseInfo() {
    return this.fetchData("/test");
  }
  login(data: userReq) {
    return this.fetchData("/user/login", data, "post");
  }
  signUp(data: userReq) {
    return this.fetchData("/user/signUp", data, "post");
  }
}
