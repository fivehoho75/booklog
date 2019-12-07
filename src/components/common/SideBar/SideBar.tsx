import React, { Component } from 'react';
import './SideBar.scss';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className="SideBar">
      <Link to="/" className="logo">
        booklog
      </Link>
      <div className="placer" />
      SideBar
    </aside>
  );
};

export default SideBar;
