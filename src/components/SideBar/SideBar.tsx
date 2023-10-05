"use client";
import React, { FC } from "react";
import TeamButton from "@/components/TeamButton/TeamButton";
import classes from "./SideBar.module.scss";
import { IClub } from "@/interfaces/interfaces";

interface IProps {
  clubsData: IClub[];
  activeButton: number;
  setActiveButton: (num: number) => void;
}
const SideBar: FC<IProps> = ({ clubsData, activeButton, setActiveButton }) => {
  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };
  return (
    <div className={classes.sidebar}>
      {clubsData.length ? (
        clubsData.map((club, i) => (
          <div key={i} onClick={() => handleButtonClick(i)}>
            <TeamButton
              key={i}
              isActive={activeButton === i}
              iconUrl={club.club_icon}
            />
          </div>
        ))
      ) : (
        <TeamButton
          iconUrl={
            "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.webp"
          }
          isActive={false}
        />
      )}
    </div>
  );
};

export default SideBar;
