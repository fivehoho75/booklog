import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Link className="brand" to="/">
        BookLog
      </Link>
      <div className="admin-login">관리자 로그인</div>
    </footer>
  );
};

export default Footer;
