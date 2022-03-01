Core React Concepts

- Component Composition
- React Dev Tools

- npm3 VS npm2
使用平铺的结构解决了node_modules嵌套过深的问题，

- <StrictMode> 
严格模式：本身具有0功能，对标签内的react代码拥有更强的警告。
是一个高阶组件，本身不做任何事情，但是对子组件提供功能。
目的：为了慢慢淘汰 不能正常工作 和 与未来react模型不兼容的API

- webpack有个插件，允许打包时的环境变量。

- parcel会自动设置当前项目的运行模式，怎么识别区分的？
TODO：

图片的alt属性不填会怎么样？
alt属性不存在时，加载失败展示img url
alt = ''， 加载失败什么都不显示。
alt = 'desc', 加载失败展示desc

组件传参数的快速方法
    - 传统方式
    <Pet
        name={pet.name}
        animal={pet.animal}
        breed={pet.breed}
        id={pet.id}
        key={pet.id}
        images={pet.images}
        location={`${pet.city},${pet.state}`}
    />
    - 展开运算符
    <Pet {...pet} key={pet.id} />

react-router：
    作用：为了实现有条件的渲染。引入router。
    特性：path 从左向右匹配。eg: path="/a", 会匹配到所有/a开头的string。
              可以利用从左到右的匹配规则，做一些公共标题。
    解决：可以通过嵌套Switch解决此问题。

为什么要用Link替换a标签？
    目的：无刷新的切换到新的页面。
    href会引起一次页面刷新，将我们带到一个完整的单独的页面。我们只是想要捕获导航的变化，从而加载对应的react组件，这样就不会卸载并重新加载基础的react。

class风格的组件：

pnpm

什么是pnpm?

对比yarn，npm优势？

自身缺陷：

umi的插件，插件集什么意思？

整个项目都没有实质性的<Link/> ,可以理解为这些页面之间是完全解耦合的吗？

调试地址：http://localhost:8000/client/lms/desktop/course/list
/desktop/course/list 写在routes.ts，但/client/lms/是从哪里加上去的？
在 .umirc.ts的base属性

withRouter是什么？

hooks怎么替代类组件的生命周期？

当组件被销毁时释放所占用的资源，hooks怎么处理？