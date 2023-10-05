'use client';
import React, {useState} from 'react';
import UserMenuButton from "@/components/UserMenuButton/UserMenuButton";
import License from "../../../public/assets/icons/UserMenuIcons/License";
import classes from './UserMenu.module.scss';
import Map from "../../../public/assets/icons/UserMenuIcons/Map";
import Medal from "../../../public/assets/icons/UserMenuIcons/Medal";
import Military from "../../../public/assets/icons/UserMenuIcons/Military";
import Shop from "../../../public/assets/icons/UserMenuIcons/Shop";
import Bell from "../../../public/assets/icons/UserMenuIcons/Bell";

const UserMenu = () => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };
  return (
    <div className={classes.container}>
      <div onClick={() => handleButtonClick(0)}>
        <UserMenuButton isActive={activeButton === 0} text={"Quests"} withText={true}><License/></UserMenuButton>
      </div>
      <div onClick={() => handleButtonClick(1)}>
        <UserMenuButton isActive={activeButton === 1} text={"Map"}><Map/></UserMenuButton>
      </div>
      <div onClick={() => handleButtonClick(2)}>
        <UserMenuButton isActive={activeButton === 2} text={"Medal"}><Medal/></UserMenuButton>
      </div>
      <div onClick={() => handleButtonClick(3)}>
        <UserMenuButton isActive={activeButton === 3} text={"Shop"}><Shop/></UserMenuButton>
      </div>
      <div onClick={() => handleButtonClick(4)}>
        <UserMenuButton isActive={activeButton === 4} text={"Military"}><Military/></UserMenuButton>
      </div>
      <div onClick={() => handleButtonClick(5)}>
        <UserMenuButton isActive={activeButton === 5} text={"Bell"}><Bell/></UserMenuButton>
      </div>
    </div>
  );
};

export default UserMenu;
