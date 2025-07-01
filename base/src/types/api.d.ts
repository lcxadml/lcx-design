/**
 * 登录参数
 */
export interface LoginParams {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
}

/**
 * 登录返回
 */
export interface LoginResponse {
  /** token */
  token: string;
}

/**
 * 用户信息
 */
export interface UserInfo {
  /** 用户 ID */
  id: string;
  /** 用户名 */
  name: string;
  /** 年龄 */
  age: number;
}
