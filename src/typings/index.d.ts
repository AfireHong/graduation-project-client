interface commonRsp<T> {
  msg: string;
  success: boolean;
  data: T;
}

interface userReq {
  nickname?: string;
  acount: string;
  password: string;
}
