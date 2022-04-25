import { SERVICE_URL } from "../config/service";

const header = {
  "User-Agent": "",
  "Content-Type": "application/json;charset=UTF-8",
  Accept: "application/json",
};

export default class HTTP {
  async fetchData<T = any>(
    url: string,
    params?: Record<string, any>,
    method = "get"
  ) {
    try {
      const options: RequestInit = {
        method: method,
        headers: header,
      };
      if (method === "get" || method === "GET") {
        if (params) {
          const paramsArray: any = [];
          Object.keys(params).forEach((key) =>
            paramsArray.push(key + "=" + params[key])
          );
          if (url.search(/\?/) === -1) {
            url += "?" + paramsArray.join("&");
          } else {
            url += "&" + paramsArray.join("&");
          }
        }
      }
      if (method === "post" || method === "POST") {
        options.body = JSON.stringify(params);
      }
      const reqUrl = SERVICE_URL + url;
      const response = await fetch(reqUrl, options);
      return response.json() as Promise<commonRsp<T>>;
    } catch (e) {
      console.log(e);
    }
  }
}
