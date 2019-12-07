import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      Header
      <div className="button-area">
        <Link to="/search" className="search-btn">
          search
        </Link>
      </div>
      <div className="spacer" />
    </div>
  );
};

export default Header;
