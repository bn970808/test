/*
 * @Author: DongBingnan
 * @Date: 2021-10-11 17:08:38
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-11 19:51:26
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import "Utils/rem";
import "Utils/vantCompImport";
import store from "Store";
import myPlugin from "Plugins";

Vue.use(myPlugin);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
