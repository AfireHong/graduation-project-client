import HTTP from "../utlis/http";

interface searchReq {
  pageIndex: number;
  pageSize: number;
  keywords: string;
}
interface searchRsp {
  count: number;
  rows: userBaseInfo[];
}
interface getUserInfoReq {
  user_acount: string;
  id: string;
}
export default class user extends HTTP {
  userInfo(data: getUserInfoReq) {
    return this.fetchData("/user/userInfo", data);
  }
  followList(data: getUserInfoReq) {
    return this.fetchData<followListRsp>("/user/followList", data);
  }
  search(data: searchReq) {
    return this.fetchData<searchRsp>("/user/search", data);
  }
}
