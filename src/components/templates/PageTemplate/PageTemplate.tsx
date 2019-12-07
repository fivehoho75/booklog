import React, { ReactNode } from 'react';
import './PageTemplate.scss';

interface Props {
  header?: ReactNode;
  children: ReactNode;
}
const PageTemplate = ({ header, children }: Props) => (
  <div className="PageTemplate">
    {header}
    <main>{children}</main>
  </div>
);

export default PageTemplate;
