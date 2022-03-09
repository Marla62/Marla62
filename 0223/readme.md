# 必学必会
TypeScript进阶【中英字幕 Intermediate TypeScript】
https://www.bilibili.com/video/BV1HL4y1J7vu?p=2&spm_id_from=pageDriver
React 进阶指南【中英字幕 Intermediate React, v3】
https://www.bilibili.com/video/BV13R4y1M7cv?from=search&seid=5429377234627065076&spm_id_from=333.337.0.0
react入门
https://www.bilibili.com/video/BV12b4y1n7tV?from=search&seid=11285138656239497798&spm_id_from=333.337.0.0

1: 纯净的react项目
Let's start by writing pure React. No compile step. No JSX. No Babel. No Webpack or Parcel. Just some JavaScript on a page.
目标：
了解CRA是什么，为什么使用它们，以及如何更改他们。

怎么做：
从0去创建react应用程序

因为CRA隐藏了所有的复杂性并且结构固定，通过从0开始，了解其中的复杂性并接受它的复杂。

react是什么？ 
    一个视图层的库：可以用它的工具，来构建用户界面。
    又：基于模型model来构建用户界面的库，所以易读 易调试。
react是如何工作的？由组件堆叠而成的应用。
竞品什么样？更像是MVC结构，C原本是指控制层，在这里就是VM了，vue中的input v-model就是vm的实际使用。
现有框架的问题？ 现在的框架：模型到视图是一个部分，视图模型是另外的一部分。
如何进行代码逻辑的复用？通过service来完成页面逻辑的复用，具体就是MVC的思想，MVC是代码组织的经典方式。
怎么诞生？  react借鉴了backbone框架。
CRA做了什么？为我们做了准备就绪的react应用。
为什么不直接编写HTML代码？直接写，会快很多，但是当项目复杂起来时，复用逻辑会提高效率，可以创建越来越复杂的应用。
父向子组件传参？props方式，向下的数据流
怎么从下往上传递？没说
为什么弃用了React.createElement()改用JSX? 隐藏react引擎所做的事情
react的一些特性：
- reactDOM其中有一些私有的API，不允许直接调用，但我们仍然可以调用到
- 函数式的组件。用函数来返回最终要展示的内容
- 需要给重复的组件设置key，便于react来追踪HTML变化，体现在交换，更新，删除元素上。

TODO:
react 使用现代化构建工具 (npm, parcel, Babel, JSX, Hooks)
学习typescript