/*
 * @Author: DongBingnan
 * @Date: 2021-10-11 19:39:40
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-11 19:48:31
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\directive\index.js
 */
function touch(el, type, handler) {
  const hammer = new Hammer(el);
  hammer.on(type, handler);
}
export default function directiveHandler(Vue) {
  Vue.directive("tap", {
    bind(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("press", {
    bind(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("pan", {
    bind(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("rotate", {
    bind(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("pinch", {
    bind(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("swipeleft", {
    bind(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("swiperight", {
    bind(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("swipeup", {
    bind(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("swipedown", {
    bind(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
}
