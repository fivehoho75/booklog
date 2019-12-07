import React from 'react';
import './PageTemplate.scss';
import Header from 'components/common/Header_';
import Footer from 'components/common/Footer';

const PageTemplate = ({ children }: any) => (
  <div className="PageTemplate">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default PageTemplate;
