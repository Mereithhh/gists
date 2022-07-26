---
title: 防抖和节流
---

## 节流

```js
/**
 * 节流函数 一个函数执行一次后，只有大于设定的执行周期才会执行第二次。有个需要频繁触发的函数，出于优化性能的角度，在规定时间内，只让函数触发的第一次生效，后面的不生效。
 * @param fn要被节流的函数
 * @param delay规定的时间
 */
function throttle(fn, delay) {
  //记录上一次函数触发的时间
  var lastTime = 0;
  return function () {
    //记录当前函数触发的时间
    var nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      //修正this指向问题
      fn.apply(this, arguments);
      //同步执行结束时间
      lastTime = nowTime;
    }
  };
}

document.onscroll = throttle(function () {
  console.log("scllor事件被触发了" + Date.now());
}, 200);
```

## 节流

```js
/**
 * 防抖函数  一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效
 * @param fn要被节流的函数
 * @param delay规定的时间
 */
function debounce(fn, delay) {
  //记录上一次的延时器
  var timer = null;
  return function () {
    //清除上一次的演示器
    clearTimeout(timer);
    //重新设置新的延时器
    timer = setTimeout(() => {
      //修正this指向问题
      fn.apply(this, arguments);
    }, delay);
  };
}
document.getElementById("btn").onclick = debounce(function () {
  console.log("按钮被点击了" + Date.now());
}, 1000);
```

## this 与箭头函数的说明

1. 作为普通函数执行时，`this` 指向 `window`。如果是事件监听，就是触发事件的对象。
2. 当函数作为对象的方法被调用时，`this` 就会指向该对象。
3. 构造器调用，`this` 指向返回的这个对象。
4. 箭头函数 箭头函数的 `this` 绑定看的是 `this` 所在函数定义在哪个对象下，就绑定哪个对象。如果有嵌套的情况，则 `this` 绑定到最近的一层对象上。
5. 基于 `Function.prototype` 上的 `apply` 、 `call` 和 `bind` 调用模式，这三个方法都可以显示的指定调用函数的 `this` 指向。`apply` 接收参数的是数组，`call` 接受参数列表，`bind` 方法通过传入一个对象，返回一个 `this` 绑定了传入对象的新函数。这个函数的 `this` 指向除了使用 `new` 时会被改变，其他情况下都不会改变。若为空默认是指向全局对象 `window`。

箭头函数会改变 `this` 的指向为定义时的`this`，所以`timeout` 内部需要用箭头函数，让箭头函数内的 `this` 与 `arguments` 与外面返回的函数相同。（因为调用的是外部被返回的函数，所以参数列表也在里面）。
## 更多
更多请看我的博客 [js 防抖节流中的 this 与箭头函数](https://www.mereith.com/post/133)