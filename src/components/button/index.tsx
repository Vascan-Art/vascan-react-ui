import classNames from 'classnames';
import React from 'react';
import { FormSize, ButtonVariant, Disabled, ButtonClasses } from '../../themes';
import { IButton } from './Button';

export const Button: React.FC<IButton> = ({
  className = '',
  children,
  size = 'sm',
  variant = 'secondary',
  disabled,
  ...rest
}) => {
  const classes = classNames(
    ButtonClasses,
    ButtonVariant[variant],
    FormSize[size],
    { [Disabled]: disabled },
    className
  );
  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
