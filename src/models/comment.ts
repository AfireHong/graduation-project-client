import HTTP from "@/utlis/http";

export interface comentListRsp {
  comment_id: string;
  content: string;
  create_at: string;
  moment_id: string;
  delete_at: string;
  parent_id: string;
  like_nums: number;
  userInfo: userBaseInfo;
}
export default class comment extends HTTP {
  async create(content: string, parent_id: string, moment_id: string) {
    return this.fetchData(
      "/comment/create",
      { content, parent_id, moment_id },
      "post"
    );
  }
  async list(moment_id: string) {
    return this.fetchData<comentListRsp[]>(
      "/comment/list",
      {
        moment_id,
      },
      "get"
    );
  }
}
