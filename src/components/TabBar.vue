<!--
 * @Author: DongBingnan
 * @Date: 2021-10-12 17:02:47
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-14 16:38:59
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\components\TabBar.vue
-->
<template>
  <footer>
    <ul>
      <router-link
        tag="li"
        :to="item.path"
        v-for="item in tabBars"
        :key="item.id"
        active-class="active"
      >
        <van-icon :name="item.iconName"></van-icon>
        <span>{{ item.text }}</span>
      </router-link>
    </ul>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: 100vw;
  height: 48px;
  border-top: 1px solid #ccc;
  ul {
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.active {
        color: red;
      }
      i {
        font-size: 22px;
        margin-bottom: 4px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      tabBars: [
        {
          id: 1,
          text: "首页",
          iconName: "wap-home-o",
          path: "/home",
        },
        {
          id: 2,
          text: "分类",
          iconName: "apps-o",
          path: "/category",
        },
        {
          id: 3,
          text: "活动",
          iconName: "star-o",
          path: "/activity",
        },
        {
          id: 4,
          text: "购物车",
          iconName: "shopping-cart-o",
          path: "/car",
        },
        {
          id: 5,
          text: "我的",
          iconName: "contact",
          path: "/user",
        },
      ],
    };
  },
};
</script>