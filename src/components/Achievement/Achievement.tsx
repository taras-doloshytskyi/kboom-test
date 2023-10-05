import React, {FC, ReactNode} from 'react';
import classes from './Achievement.module.scss';
import Plus from "../../../public/assets/icons/Plus";

interface IProps {
  children: ReactNode;
  total: string;
}
const Achievement:FC<IProps> = ({children, total}) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        {children}
      </div>
        <div className={classes.plus}>
        <Plus/>
        </div>
      {total}
    </div>
  );
};

export default Achievement;
