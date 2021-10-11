<!--
 * @Author: DongBingnan
 * @Date: 2021-10-11 17:08:38
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-11 21:08:10
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\App.vue
-->
<template>
  <div>
    <div class="box" v-swiperight="handler"></div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <p>
      {{ time | dateFilter("-") }}
    </p>
  </div>
</template>
<style lang="sass" scoped>
.box
  width: 100px
  height: 100px
  background: red
</style>
<script>
export default {
  data() {
    return {
      time: Date.now(),
    };
  },
  methods: {
    handler() {
      console.log("11111");
    },
  },
};
</script>