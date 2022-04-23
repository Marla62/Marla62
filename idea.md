# 灵感

## VUE的双向绑定体现在哪里，对比react的单向数据流？

体现在 action调用者的区别，react数据变更后；我们人为的调用set方法这是个action。vue好在自动收集了依赖，数据变更后不需要我们显式的调用action，他会帮我们去通知依赖方，调用各自的action。
vue他就是backbone 的 collection的另一种具体实现。

vue用get / set 在管理 'store'，
backbone通过监听store变化，并通过change事件通知使用者。

## let it be

"请赐予我力量，全力改变那些可以改变的事情，平静接受那些无能为力的事情，拥有智慧区分这两者。"