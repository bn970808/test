/*
 * @Author: DongBingnan
 * @Date: 2021-10-11 17:39:20
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-11 19:49:31
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\vue.config.js
 */
const path = require("path");

const px2rem = require("postcss-px2rem");
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16,
});

function pathHandler(pathUrl) {
  return path.join(__dirname, pathUrl);
}
module.exports = {
  devServer: {
    // proxy: {},
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", pathHandler("./src"))
      .set("Api", pathHandler("./src/api"))
      .set("Assets", pathHandler("./src/assets"))
      .set("Comp", pathHandler("./src/components"))
      .set("Filter", pathHandler("./src/filters"))
      .set("Mixin", pathHandler("./src/mixin"))
      .set("Pages", pathHandler("./src/pages"))
      .set("Plugins", pathHandler("./src/plugins"))
      .set("Router", pathHandler("./src/router"))
      .set("Store", pathHandler("./src/store"))
      .set("Utils", pathHandler("./src/utils"))
      .set("Directive", pathHandler("./src/directive"));
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss],
      },
    },
  },
};
