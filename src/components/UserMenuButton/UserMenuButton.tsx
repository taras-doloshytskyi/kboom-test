import React, {FC, ReactNode} from 'react';
import classes from './UserMenuButton.module.scss'

interface IProps {
  children: ReactNode;
  text: string;
  isActive: boolean;
  withText?: boolean;
}

const UserMenuButton: FC<IProps> = ({children, text, isActive, withText}) => {
  return (
    <div className={isActive ? `${classes.container} ${classes.active}` : classes.container}>
      <div className={classes.icon}>{children}</div>
      <div className={classes.text} style={withText ? {display: "block"} : {}}>
        {text}
      </div>
    </div>
  );
};

export default UserMenuButton;
