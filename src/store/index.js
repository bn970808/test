/*
 * @Author: DongBingnan
 * @Date: 2021-10-11 19:13:28
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-11 19:26:38
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import homeStore from "Pages/home/store";
import userStore from "Pages/user/store";
import carStore from "./car";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    homeStore,
    userStore,
    carStore,
  },
});

export default store;
