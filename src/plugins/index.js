/*
 * @Author: DongBingnan
 * @Date: 2021-10-11 19:27:39
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-11 19:49:22
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\plugins\index.js
 */
import filterHandler from "Filter";
import directiveHandler from "Directive";
const myPlugin = {
  install(Vue) {
    //过滤器处理
    filterHandler(Vue);
    //自定义指令
    directiveHandler(Vue);
  },
};
export default myPlugin;
