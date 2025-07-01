// src/api/user.ts

import request from "../utils/request";
import type { LoginParams } from "../types/api";
/**
 * 登录返回
 */
interface LoginResponse {
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
}
/**
 * 用户登录
 * @param params 登录参数
 * @returns 返回 token
 */
export function login(params: LoginParams): Promise<LoginResponse> {
  return request.post("/user/login", params);
}
