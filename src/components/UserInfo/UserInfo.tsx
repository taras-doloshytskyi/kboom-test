import React from 'react';
import classes from './UserInfo.module.scss'
import UserIcon from "../../../public/assets/icons/UserIcon";
import LevelRange from "@/components/LevelRange/LevelRange";
import Achievement from "@/components/Achievement/Achievement";
import Coin from "../../../public/assets/icons/Coin";
import Rewards from "../../../public/assets/icons/Rewards";
import Fire from "../../../public/assets/icons/Fire";

const UserInfo = () => {
  return (
    <div className={classes.infoContainer}>
      <div className={classes.userLogoName}>
        <UserIcon/> <span>Pseudo</span>
      </div>
      <LevelRange level={7} currentRange={200} fullRange={1000}/>
      <div className={classes.achievementContainer}>
        <Achievement total={'12,897'}><Coin/></Achievement>
        <Achievement total={'322'}><Rewards/></Achievement>
        <Achievement total={'2/5'}><Fire/></Achievement>
      </div>
    </div>
  );
};

export default UserInfo;
