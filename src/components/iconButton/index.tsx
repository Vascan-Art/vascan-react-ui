import Icon from '@mdi/react';
import classNames from 'classnames';
import React from 'react';
import { IIconButton } from './IconButton';

export const IconButton: React.FC<IIconButton> = ({
  className = '',
  path,
  onClick,
  bgColor = 'white',
  iconColor = 'grey-1',
  // hoverColor = ,
  size = '24',
  ...rest
}) => {
  const classes = classNames(
    `text-${iconColor}`,
    `bg-${bgColor}`,
    `p-2 rounded-full`,
    className
  );
  return (
    <button className={classes} {...rest} onClick={onClick}>
      <Icon path={path} size={size}></Icon>
    </button>
  );
};
