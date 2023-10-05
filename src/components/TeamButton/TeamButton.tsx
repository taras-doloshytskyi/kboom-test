'use client'
import React, {FC} from 'react';
import classes from './TeamButton.module.scss'

interface IProps {
  isActive: boolean;
  iconUrl: string;
}
const TeamButton:FC<IProps> = ({isActive, iconUrl}) => {
  return (
    <div className={classes.container}>
      {isActive && <div className={classes.before}></div>}
      <div className={isActive ? `${classes.button} ${classes.active}` : classes.button}>
        <div className={classes.iconWithGradient}>
          <div className={classes.iconContainer}>
            <img className={classes.icon} src={iconUrl} alt={'club logo'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamButton;
