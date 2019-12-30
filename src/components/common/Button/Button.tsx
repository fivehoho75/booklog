import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';
import cx from 'classnames';

interface DivProps {
  children?: any;
}

interface ButtonProps {
  children?: any;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  theme?: string;
}

const Div = ({ children, ...rest }: DivProps) => (
  <div {...rest}>{children}</div>
);

const Button = ({
  children,
  to = '/',
  onClick,
  disabled,
  theme = 'default',
}: ButtonProps) => {
  const Element = to && !disabled ? Link : Div;

  return (
    <Element
      to={to}
      className={cx('Button', theme, { disabled })}
      onClick={disabled ? () => null : onClick}
    >
      {children}
    </Element>
  );
};

export default Button;
