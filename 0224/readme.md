目标：
    1. 了解工具链中的每个工具
    2. 使用JSX来重构
为什么使用npm构建，而不是CDN？
    npm将强依赖的资源捆绑到一起，同时原本很多行命令做的事情 简化成1行命令来替代，同时也隐藏了复杂度。
    -D 表示本地的开发依赖 比如 prettier 
    -yarn.lock 表示打包时的锁定依赖版本，不至于下次安装会因为版本不同而产生问题。

能通过编辑器插件完成的事情，为什么还要写道package.json中？
    便于团队协作，并不是所有人都安装了插件。但所有人会安装npm包。

面向开发者编程是在做什么?
    编写高质量的代码，并且不减慢他们的开发速度。

package.json做了什么？
    - 记录了项目中的包依赖
    - browserslist适配列表

browserslist配置项是什么意思？
它定义了一套浏览器兼容配置标准，使得众多前端开发工具（Autoprefixer, Babel, Stylelint...）之间可以共享同一套配置。

browserslist的默认配置？
Browserslist 将采用默认配置：> 0.5%, last 2 versions, Firefox ESR, not dead

什么是Parcel？
    一个js打包器，0配置, 自动解析已有内容使用对应loader。

什么时候适合使用Parcel？
快速的跑一个HTML页面出来。
可以接受没有SourceMap、TreeShaking的情况。

为什么没有TreeShaking、SourceMap？
TODO
 
引入转译工具-Babel?
不像C++那样编译到二进制。只是将es2021到es2015,以兼容更低的宿主。
编译JSX内容
Babel会在需要的地方自动导入React包

怎么在react应用中进行eslint配置？
需要安装react相关插件才能正常使用，具体参照和上一个eslint课程
https://www.bilibili.com/video/BV12b4y1n7tV?p=14&share_source=copy_web
进行配置。

如果不了解命令行工具，可以继续听他的关于命令行的大师课。

---------

第一部分完结

JSX：为什么使用JSX？
-更直观的写法，通过Babel和parcel的转换输出浏览器识别的js function.
-写的更少，做得更多

JSX中为什么是className而不是class?
-react理念是对齐DOM API，数据驱动视图。
-es5之前，在对象中不能使用class关键字做key，IE8会报错.保留字也不可做key吗？不知道，IE8装不上
-现在浏览器环境也禁止声明关键字、但保留字可以

Hooks：
16.4：全新的API，用来管理react应用程序内部的状态
视图到数据的流动， 
input输入事件的实现 用 useState将变量包装，再加onChange实现

input每次输入都会触发重新渲染。劫持了change方法

为什么会出现Hooks？
- 为react组件模型所生。是一个共享状态逻辑的原生途径。
-Hook 使你在非 class 的情况下可以使用更多的 React 特性。


hooks是异步的吗？

Hooks和setState的区别？
TODO:不知道setState是个啥？

Vue3的 ref()是不是react的useeState()同类？
TODO：应该是 没试过

html下label的for属性是什么作用？
表示用户界面中某个元素的说明。就是个指针指向被作用的元素。

收获：
掌握了一种学习思维：
看视频学内容 他说到了使用parcel打包，搜一下，了解下基本概念，然后再去搜webpack和他的优缺点对比（社区里），搜parcel和webpack在使用过程中蹩脚的地方，从而对两者有了更深的认识。同时 对技术选型上也有一些新的认识：合适的才是最好的。同时丰富了自己技术栈的广度和深度。这件事情上广度 > 深度