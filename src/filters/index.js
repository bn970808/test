/*
 * @Author: DongBingnan
 * @Date: 2021-10-11 19:28:35
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-11 19:34:41
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\filters\index.js
 */
export default function filterHandler(Vue) {
  Vue.filter("dateFilter", function(val, type = "/") {
    const date = new Date(val);
    return (
      date.getFullYear() + type + (date.getMonth() + 1) + type + date.getDate()
    );
  });
}
