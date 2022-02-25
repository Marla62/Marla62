// import React from 'react'
import ReactDOM from 'react-dom';
// import Pet from './Pet'
import SearchParams from './SearchParams';

// Warning: Functions are not valid as a React child.
// This may happen if you return a Component instead of <Component /> from render.
// Or maybe you meant to call this function rather than return it.
// const App = () => {
//   // 标签 挂载的位置 标签内的内容
//   return React.createElement("div", {}, 
//   [
//     React.createElement("h1", {}, "Adopt Me"),
//     // Warning: Each child in a list should have a unique "key" prop.
//     // 渲染数组类型组件需要key
//     // ...[1, 2, 3, 4].map((item) => React.createElement("h2", {}, item)),
//     // 组件复用
//     React.createElement(Pet, {name: 'Luna', age: '13', weight: '24'}),
//     React.createElement(Pet, {name: 'Dog', age: '14', weight: '24'}),
//     React.createElement(Pet, {name: 'Havana', age: '15', weight: '24'}),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      {/* <Pet name="Luna" age="13" weight="24"></Pet>
      <Pet name="Dog" age="14" weight="24"></Pet>
      <Pet name="Havana" age="15" weight="24"></Pet> */}
      <SearchParams  />
    </div>
  )
}

const rootDOM = document.getElementById("root");
ReactDOM.render(<App />, rootDOM);
