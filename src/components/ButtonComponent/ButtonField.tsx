import React from 'react';
import { ButtonProps } from './button';

const Button: React.FC<ButtonProps> = React.memo((props:any) => {
  const { type, className, children, onClick } = props;

  return <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
});

Button.defaultProps = {
    type: 'button',
    className: 'btn'
};

export default Button;

