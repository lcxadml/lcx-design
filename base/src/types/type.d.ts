export type LoginResponse = {
  /** 登陆token */
  token: string;
  /**
   * 用户名
   */
  username: string;
  /**
   * 密码
   */
  password: string;
};

export interface LoginParams {
  /**
   * 听
   */
  username: string;
  aid: string;
  user: User;
}

export type User = {
  name: string;
  aid: number;
};
