# 灵感

## VUE的双向绑定体现在哪里，对比react的单向数据流？

体现在 action调用者的区别，react数据变更后；我们人为的调用set方法这是个action。vue好在自动收集了依赖，数据变更后不需要我们显式的调用action，他会帮我们去通知依赖方，调用各自的action。
vue他就是backbone 的 collection的另一种具体实现。

vue用get / set 在管理 'store'，
backbone通过监听store变化，并通过change事件通知使用者。

## let it be

"请赐予我力量，全力改变那些可以改变的事情，平静接受那些无能为力的事情，拥有智慧区分这两者。"

## [怎么能对开源社区做出贡献](https://github.com/Marla62/Marla62/blob/master/IDEA/%E6%80%8E%E4%B9%88%E8%83%BD%E5%AF%B9%E5%BC%80%E6%BA%90%E7%A4%BE%E5%8C%BA%E5%81%9A%E5%87%BA%E8%B4%A1%E7%8C%AE.md)
