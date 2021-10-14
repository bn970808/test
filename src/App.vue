<!--
 * @Author: DongBingnan
 * @Date: 2021-10-11 17:08:38
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-14 16:45:32
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\App.vue
-->
<template>
  <div class="app">
    <Tab></Tab>
    <!-- <Home></Home> -->
    <keep-alive>
      <!-- 路由展示 -->
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
// import Home from "Pages/home";
import Tab from "Comp/Tab";
import TabBar from "Comp/TabBar";
export default {
  name: "APP",
  components: {
    Tab,
    TabBar,
  },
};
</script>
<style lang='scss'>
@import "Assets/stylesheets/reset";
.app {
  display: flex;
  flex-direction: column;
}
</style>