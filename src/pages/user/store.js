/*
 * @Author: DongBingnan
 * @Date: 2021-10-11 19:19:28
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-12 16:10:53
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\pages\user\store.js
 */
import { loginReq } from "Api";
export default {
  namespaced: true,
  state: {
    loginData: {},
  },
  actions: {
    login({ commit }, payload) {
      loginReq(payload).then((res) => {
        commit({
          type: "LOGIN",
          payload: res,
        });
      });
    },
  },
  mutations: {
    LOGIN(state, { payload }) {
      state.loginData = payload;
    },
  },
};
