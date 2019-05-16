import React from 'react';

//To create get priorities for user dropdown list to add / edit card

const Priority = (props) => {
  const { id, name, selected } = props;

  if (selected === true) {
    return (
      <option id={id} selected="true">{name}</option>
    )
  } else {
    return (
      <option id={id}>{name}</option>
    )
  }
}

export default Priority;