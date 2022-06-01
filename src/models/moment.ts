import HTTP from "../utlis/http";
type createReq = {
  moment_title: string;
  moment_content: string;
  moment_images: string[];
};
type getUserMomentReq = {
  user_id?: string;
};
export default class moment extends HTTP {
  create(data: createReq) {
    return this.fetchData<{ moment_id: string }>(
      "/moment/create",
      data,
      "post"
    );
  }
  getUserMoment(data?: getUserMomentReq) {
    return this.fetchData("/moment/getByUser", data, "get");
  }
}
