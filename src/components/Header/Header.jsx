import React from 'react';
import NewTask from '../../containers/New Task';
import Logout from '../../containers/Logout';
import './Header.css'

const Header = (props) => {
  const { title, show, handleOpen } = props;

  return (
    <div className="header">
      <div className="header-title">{title}</div>
      <div className="button-container">
        <div className="new-task-button"><NewTask show={show} handleOpen={handleOpen} /></div>
        <div className="logout-button"><Logout /></div>
      </div>
    </div>
  );
};

export default Header;