import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const Header = () => {
  return (
    <div className="Header">
      <div className="button-area">
        <Link to="/search" className="search-btn">
          <span>search</span>
        </Link>
      </div>
      <div className="spacer" />
      <div className="right-area">
        <Button theme="outline" to="/book">
          로그인
        </Button>
      </div>
    </div>
  );
};

export default Header;
