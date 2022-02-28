Core React Concepts

- Component Composition
- React Dev Tools

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