# 灵感

## VUE的双向绑定体现在哪里，对比react的单向数据流？

体现在 action调用者的区别，react数据变更后；我们人为的调用set方法这是个action。vue好在自动收集了依赖，数据变更后不需要我们显式的调用action，他会帮我们去通知依赖方，调用各自的action。
vue他就是backbone 的 collection的另一种具体实现。

vue用get / set 在管理 'store'，
backbone通过监听store变化，并通过change事件通知使用者。

## let it be

"请赐予我力量，全力改变那些可以改变的事情，平静接受那些无能为力的事情，拥有智慧区分这两者。"

## [怎么能对开源社区做出贡献](/IDEA/%E6%80%8E%E4%B9%88%E8%83%BD%E5%AF%B9%E5%BC%80%E6%BA%90%E7%A4%BE%E5%8C%BA%E5%81%9A%E5%87%BA%E8%B4%A1%E7%8C%AE.md)

## 看源码的方法和目的性

如果某个源码链接了很多别的库，什么时候该去看第三方依赖库：被卡住的时候

但是看源码是在看什么? 不知道。剽窃他的设计思想。最终达到为己用或者推陈出新。
官方的说法就是:

1. 尝试捕捉未来技术的发展趋势
2. 学习做学术或者做工程的方法

## 编程是在做什么

  像是音乐 绘画同样需要**创造力**的事情
  有一个解决问题的系统,工作和生活是在完善这个系统的case

## 博客框架选择

迫于github记录没有很好地可视化目录结构,我自己想找之前的东西都不容易, 再就是想回头看看做过什么,很困难,所以开始使用博客系统

我的需求

* 明确的分层目录
* 最好可以支持脑图
* 能学到任何东西

为什么是vue-press

* vue3是未来趋势
* 可以在md中写vue语法
* 相对较新的技术栈,便于学习新的技术栈
* 支持ts, 但是写个文档要TS有什么用
* vue驱动的主题
* 为编写技术文档而优化的默认主题
* 为什么不是Gatsby? `在构建过程中，我们会为 VuePress 站点创建一个服务端渲染 (SSR) 的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML 。这种做法的灵感来源于 Nuxt 的 nuxt generate 命令，以及其他的一些项目，比如 Gatsby。`

为什么是Gatsby

* react极高的性能
* react组件化以及函数式编程的思想更具有前瞻性和可复制性
* 官方文档介绍了背后的工作原理,值得一试
