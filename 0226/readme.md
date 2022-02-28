- hooks

是16.8的新特性，在不编写class的情况下使用state以及其他react特性。
函数式组件（无状态组件）使用hooks进行状态管理。

- class组件
class风格的react组件，配合state实现数据到视图 视图到数据的更新。

- state
数据更新时自动刷新试图，视图更新时将变更传回数据层。所以要引入state的概念。
vue是get,set来实现这个能力

- useEffect
副作用函数， data变化后触发此函数。
useEffect(() => {
	return getJson()
}, [data])

- 为什么要用useEffect监听，而不是用timer?

没指定browserslist时，报错regeneratorRuntime 是什么原因？
简单来说：Babel默认转到了更低级的代码，但是这个过程又依赖另外的插件（但是这个插件又被集成到了Babel7中,)
所以要加配置（告诉Babel不要找插件了，用内置的）来解决。

- Babel默认会将async/await转成ES5，
babel 转换 async/await 主要通过 @babel/plugin-transform-async-to-generator
Babel 7 中已经内置到了 @babel/preset-env, 
那么我们是不是可以告诉 @babel/preset-env 不要使用 @babel/plugin-transform-async-to-generator 插件

- 什么是工具链？
Babel webpack eslint这些前端工具。写一些高级的语法
，JSX/vue这种代码，这种浏览器肯定不认识，所以要加入工具，进行编译
。这些工具都是基于node

