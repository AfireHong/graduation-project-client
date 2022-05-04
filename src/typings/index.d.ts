interface commonRsp<T> {
  msg: string;
  success: boolean;
  data: T;
}

interface userInfo {
  user_id: string;
  user_acount: string;
  user_password: string;
  user_nickname: string;
  user_birth: string;
  user_area: string;
  user_avatar: string;
  user_sex: number;
  user_profile: string;
  user_followers: number;
  user_following: number;
  user_last_login_at: string;
  user_create_at: string;
}

interface userReq {
  nickname?: string;
  acount: string;
  password: string;
}
