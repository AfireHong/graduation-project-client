import HTTP from "../utlis/http";

export default class index extends HTTP {
  getBaseInfo() {
    return this.fetchData("/test");
  }
}
