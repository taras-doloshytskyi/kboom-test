import React, {FC} from 'react';
import classes from './LevelRange.module.scss'

interface IProps {
  level: number;
  currentRange: number;
  fullRange: number;
}

const LevelRange: FC<IProps> = ({level, currentRange, fullRange}) => {
  const fullWidth = 175
  const leftWidth = fullWidth * currentRange / fullRange
  const rightWidth = fullWidth - leftWidth

  return (
    <div className={classes.levelRange}>
      <div className={classes.levelBlock}>{level}</div>
      <div className={classes.rangeBlock}>
        <span className={classes.rangeText}>{currentRange}/{fullRange}</span>
        <div className={classes.left} style={{width: `${leftWidth}px`}}></div>
        <div className={classes.right} style={{width: `${rightWidth}px`}}></div>
      </div>
    </div>
  );
};

export default LevelRange;
