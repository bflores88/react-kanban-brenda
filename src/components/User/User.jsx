import React from 'react';

//To create get users for user dropdown list to add / edit card

const User = (props) => {

  const { id, first_name } = props;

  

    return (
      <option id={id}>{first_name}</option>
    )
  
}

export default User;