import React from 'react';
import { ButtonProps } from './button';

const Button: React.FC<ButtonProps> = ({ type, className, children }:any) => (
  <button type={type} className={className}>
    {children}
  </button>
);

Button.defaultProps = {
    type: 'button',
    className: 'btn'
};

export default Button;

