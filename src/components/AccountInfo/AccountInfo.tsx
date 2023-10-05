import React, {FC} from 'react';
import classes from './AccountInfo.module.scss'
import UserInfo from "@/components/UserInfo/UserInfo";
import UserMenu from "@/components/UserMenu/UserMenu";
import AccountManagement from "@/components/AccountManagement/AccountManagement";
import {IClub} from "@/interfaces/interfaces";

interface IProps {
  clubsData: IClub[];
  activeButton: number;
}
const AccountInfo:FC<IProps> = ({clubsData, activeButton}) => {  
  const currentClub = clubsData.find(club => club.id === activeButton.toString())

  return (
    <div className={classes.allInfoDiv}>
      <div className={classes.teamLogoName}>
        {currentClub ? <><img className={classes.logoImg} src={currentClub?.club_icon} alt={'club logo'}/> {currentClub?.club_name}</>: <img className={classes.logoImg} src={'https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.webp'} alt={'spinner'}/>}
      </div>
      <UserInfo/>
      <UserMenu/>
      <AccountManagement/>
    </div>
  );
};

export default AccountInfo;
