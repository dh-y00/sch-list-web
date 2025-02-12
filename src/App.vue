<template>
  <router-view/>
</template>
<script setup lang="ts">
// ================ 下面这段全局代码是为了解决抖动引起的报错 ResizeObserver loop completed with undelivered notifications.

/*
解释：
这个错误通常表示ResizeObserver无法在一个浏览器帧中传递所有的通知，因为它们需要的处理时间比帧的剩余时间更长。这通常发生在被观察元素的尺寸变化导致了一连串的回调函数被调用时。

解决方法：

1、优化回调函数：确保你的ResizeObserver回调函数尽可能高效，减少在回调内部执行的计算和DOM操作。

2、减少观察元素数量：如果可能，减少ResizeObserver同时观察的元素数量，以减轻在帧结束时未能传递所有通知的可能性。

3、使用requestAnimationFrame或setTimeout来分散处理：如果你需要进行复杂的处理，并且这个处理需要多次迭代完成，可以使用requestAnimationFrame或setTimeout来分散这些处理，避免在一个浏览器帧内执行过多的工作。
*/

import { debounce } from "lodash";
// eslint-disable-next-line
const resizeObserver  = (window as any).ResizeObserver;
// eslint-disable-next-line
(window as any).ResizeObserver = class ResizeObserver extends resizeObserver  {
  // eslint-disable-next-line
  constructor(callback: (...args: any[]) => void) {
    callback = debounce(callback, 100);
    super(callback);
  }
};

// const debounce = (fn: any, delay: any) => {
//     let timer: any = null;
//     return function () {
//       let context = this;
//       let args = arguments;
//       clearTimeout(timer);
//       timer = setTimeout(function () {
//         fn.apply(context, args);
//       }, delay);
//     };
//   };
  
//   const _ResizeObserver = window.ResizeObserver;
//   window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
//     constructor(callback: any) {
//       callback = debounce(callback, 16);
//       super(callback);
//     }
//   };
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
