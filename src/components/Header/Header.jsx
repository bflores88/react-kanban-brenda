import React from 'react';
import NewTask from '../../containers/New Task';
import './Header.css'

const Header = (props) => {
  const { title, show, handleOpen } = props;

  return (
    <div className="header">
      <div className="header-title">{title}</div>
      <div className="new-task-button"><NewTask show={show} handleOpen={handleOpen}/></div>
    </div>
  );
};

export default Header;