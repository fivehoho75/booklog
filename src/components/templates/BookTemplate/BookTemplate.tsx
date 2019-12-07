import React, { ReactNode } from 'react';
import './BookTemplate.scss';

interface Props {
  children: ReactNode;
}

const BookTemplate = ({ children }: Props) => (
  <div className="BookTemplate">{children}</div>
);
export default BookTemplate;
