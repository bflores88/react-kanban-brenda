import React from 'react';
import NewTask from '../../containers/New Task';
import './Header.css'

const Header = (props) => {
  const { title } = props;

  return (
    <div className="header">
      <div className="header-title">{title}</div>
      <div className="new-task-button"><NewTask /></div>
    </div>
  );
};

export default Header;