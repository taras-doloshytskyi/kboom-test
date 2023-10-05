"use client";
import SideBar from "@/components/SideBar/SideBar";
import classes from "./page.module.scss";
import AccountInfo from "@/components/AccountInfo/AccountInfo";
import { useEffect, useState } from "react";
import { IClub } from "@/interfaces/interfaces";

export default function Home() {
  const [clubsData, setClubsData] = useState<IClub[]>([]);
  const [activeButton, setActiveButton] = useState<number>(0);

  useEffect(() => {
    // I used the mockAPI to create endpoints with data
    // .then(response => response.json())
    // .then(data => setClubsData(data))
    const getClubsData = async () => {
      try {
        const response = await fetch(
          "https://651d46d244e393af2d597bea.mockapi.io/clubs_data"
        );
        const clubsDataResponse = await response.json();
        setClubsData(clubsDataResponse);
      } catch {
        console.error("Failed to get clubs data");
      }
    };

    getClubsData();
  }, []);

  return (
    <div className={classes.container}>
      <SideBar
        clubsData={clubsData}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <AccountInfo clubsData={clubsData} activeButton={activeButton} />
    </div>
  );
}
