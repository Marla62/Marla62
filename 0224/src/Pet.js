import React from 'react'

const Pet = (props) => {
    return React.createElement("div", null, 
    [
      React.createElement("h2", null, props.name),
      React.createElement("h3", null, props.age),
      React.createElement("h3", null, props.weight),
    ]);
  };

export default Pet;