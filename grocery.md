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