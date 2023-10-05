'use client';
import React, {useState} from 'react';
import Preferences from "../../../public/assets/icons/Preferences";
import Profile from "../../../public/assets/icons/Profile";
import classes from './AccountManagement.module.scss';
import UserMenuButton from "@/components/UserMenuButton/UserMenuButton";
const AccountManagement = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
    if (buttonIndex === activeButton) {
      setActiveButton(null)
    }
  };
  return (
    <div className={classes.container}>
      <span className={classes.title}>Account management</span>
      <div onClick={() => handleButtonClick(0)}>
        <UserMenuButton text={'Profile'} isActive={activeButton === 0}><Profile/></UserMenuButton>
      </div>
      <div onClick={() => handleButtonClick(1)}>
        <UserMenuButton text={'Preferences'} isActive={activeButton === 1}><Preferences/></UserMenuButton>
      </div>
    </div>
  );
};

export default AccountManagement;
