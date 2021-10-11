/*
 * @Author: DongBingnan
 * @Date: 2021-10-11 20:35:25
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-11 20:41:46
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\api\index.js
 */
import request from "Utils/request";
import { loginURL } from "./url";

export function loginReq(data) {
  return request({
    url: loginURL,
    data,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
