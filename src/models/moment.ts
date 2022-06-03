import HTTP from "../utlis/http";
type createReq = {
  moment_title: string;
  moment_content: string;
  moment_images: string[];
};
type getUserMomentReq = {
  user_id?: string;
};

export interface getMomentRsp {
  moment_id: string;
  moment_title: string;
  moment_content: string;
  moment_images: string[];
  moment_like_nums: number;
  moment_collect_nums: number;
  moment_create_at: string;
  moment_update_at: string;
  moment_is_private: number;
  moment_is_delete: number;
  userInfo: userBaseInfo;
}
export default class moment extends HTTP {
  create(data: createReq) {
    return this.fetchData<{ moment_id: string }>(
      "/moment/create",
      data,
      "post"
    );
  }
  getUserMoment(data?: getUserMomentReq) {
    return this.fetchData<getMomentRsp[]>("/moment/getByUser", data, "get");
  }
  getMoment(moment_id: string) {
    return this.fetchData<getMomentRsp>("/moment", { moment_id }, "get");
  }
}
