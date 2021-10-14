/*
 * @Author: DongBingnan
 * @Date: 2021-10-14 15:03:42
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-14 16:01:14
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
