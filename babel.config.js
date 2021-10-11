/*
 * @Author: DongBingnan
 * @Date: 2021-10-11 17:08:38
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-11 18:11:24
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\babel.config.js
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
      },
      "vant",
    ],
  ],
};
