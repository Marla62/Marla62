1. vue的hash和history有什么区别？

hash兼容到IE8.history只到IE10. 但如今移动时代，兼容IE可以不考虑。

hash本身是做页面定位的，滚动到页面指定DOM元素。hash模式的路由改变了这种约定。

hash传参基于URL，肯定就不能传输复杂的数据。但是history可以将参数存储到某个位置，用来处理hash的传参问题。

history模式URL改变会对服务器发起请求，需要在服务层做异常URL的catch。

2. 实现一个深拷贝

js这种面向对象的语言，他没有提供取址操作符。当你在修改对象时，多个指针指向此对象，修改后就会影响多出地方。此时我们需要一个对象的副本，来供应不同的消费方。

深拷贝的关键在于 递归的访问每一个属性/基本类型和引用类型的区分/以及处理循环引用


```javaScript

function clone (target, map = new Map()) {
    if( typeof target === 'object' ) {
        if(map.get(target)) {

        }
        const temp = Array.isArray(target) ? [] : {};
        map.set(target, temp)
        for( let key in target ) {
            temp[key] = clone(target[key], map);
        }
        return temp;
    } else {
        return target;
    }
}

```

3. 我是怎么理解eventloop的

首先解释它的出现原因：
js作为一个脚本语言，在90年代纯静态的页面下，我按下刷新按钮，页面从头开始获取数据，根据数据渲染页面。这时候有没有脚本无所谓，纯静态的页面而已。

表单校验，用户交互，这些action基于用户操作。

当用户没有操作的情况下，我想让页面产生点变化，比如说倒计时/div位置变动的动画，该怎么做？

那当然是用一个timer来不断地循环队列中的任务。我需要做某个事情，那就给任务队列推送任务。当主线程空闲后就来执行一次。
action来源有多个（用户操作，脚本执行，异步回调等），在不把问题复杂化的情况下（线程锁），用单线程来处理是最优的。在处理多种异步任务的情况下，用队列来保持顺序，用单线程来保证调用的时序与数据的一致性。