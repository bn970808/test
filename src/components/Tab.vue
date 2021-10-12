<!--
 * @Author: DongBingnan
 * @Date: 2021-10-12 17:01:16
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-12 17:42:20
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\components\Tab.vue
-->
<template>
  <header>
    <van-icon name="arrow-left" v-if="flag" />
    <h3>{{ title }}</h3>
    <van-icon name="ellipsis" v-if="flag" />
  </header>
</template>
<style lang="scss" scoped>
@import "Assets/stylesheets/theme";
header {
  width: 100vw;
  height: 55px;
  background: $themeColor;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 18px;
  h3 {
    flex: 1;
    text-align: center;
  }
}
</style>
<script>
export default {
  data() {
    return {
      flag: false,
      title: "标题栏1",
    };
  },
};
</script>