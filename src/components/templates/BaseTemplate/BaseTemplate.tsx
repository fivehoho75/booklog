import React, { ReactNode } from 'react';
import './BaseTemplate.scss';
import BackgroudColor from 'components/common/BackgroudColor';

interface Props {
  children: ReactNode;
  sidebar: ReactNode;
}
const BaseTemplate = ({ children, sidebar }: Props) => (
  <div className="BaseTemplate">
    <BackgroudColor color="#f1f3f5" />
    {sidebar}
    {children}
  </div>
);

export default BaseTemplate;
