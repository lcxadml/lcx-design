// src/api/user.ts

import { LoginParams, LoginResponse } from "../types/type";
import request from "../utils/request";

/**
 * 用户登录
 * @param params 登录参数
 * @returns 返回 token
 */
export function login(params: LoginParams): Promise<LoginResponse> {
  return request.post("/user/login", params);
}

/**
 * 用户登录
 * @param params 登录参数
 * @returns 返回 token
 */
export function order(params: LoginParams): Promise<LoginResponse> {
  return request.post("/user/login", params);
}
