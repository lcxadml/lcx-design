// src/api/user.ts

import request from "../utils/request";
import { LoginParams, LoginResponse } from "../types/type";

/**
 * 用户登录
 * @param params 登录参数
 * @returns 返回 token
 */
export function order(params: LoginParams): Promise<LoginResponse> {
  return request.post("/user/login", params);
}
