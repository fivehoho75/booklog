import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Button from 'components/common/Button';

const Header = () => {
  console.log(process.env);
  return (
    <header className="header">
      <div className="header-content">
        <div className="brand">
          <Link to="/">BookLog</Link>
        </div>
        <div className="right">
          <Button theme="outline" to="/editor">
            새 포스트
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
