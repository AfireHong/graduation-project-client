interface commonRsp<T> {
  msg: string;
  code: number;
  data: T;
}

interface userReq {
  username: string;
  password: string;
}
