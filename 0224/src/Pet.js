// import React from 'react'

// const Pet = (props) => {
//     return React.createElement("div", null, 
//     [
//       React.createElement("h2", null, props.name),
//       React.createElement("h3", null, props.age),
//       React.createElement("h3", null, props.weight),
//     ]);
//   };

const Pet = (props) => {
  return (
    <div>
      <h2>{ props.name }</h2>
      <h3>{ props.aeg }</h3>
      <h3>{ props.weight }</h3>
    </div>
  )
}

export default Pet;