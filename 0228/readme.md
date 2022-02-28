Core React Concepts

- Component Composition
- React Dev Tools

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


pnpm

什么是pnpm?

对比yarn，npm优势？

自身缺陷：