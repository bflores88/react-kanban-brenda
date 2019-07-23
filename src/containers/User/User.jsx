import React from 'react';

//To create get users for user dropdown list to add / edit card

const User = (props) => {
  const { id, userName } = props;

  return <option value={id}>{userName}</option>;
};

export default User;
