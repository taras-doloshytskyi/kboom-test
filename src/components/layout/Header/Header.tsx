import React from 'react';
import classes from './Header.module.scss'
import Logo from "@/../public/assets/icons/Logo";
import Twitter from "../../../../public/assets/icons/Twitter";
import Discord from "../../../../public/assets/icons/Discord";
import Twitch from "../../../../public/assets/icons/Twitch";
import TikTok from "../../../../public/assets/icons/TikTok";
import YouTube from "../../../../public/assets/icons/YouTube";
import Instagram from "../../../../public/assets/icons/Instagram";
import Facebook from "../../../../public/assets/icons/Facebook";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo/>
        <div className={classes.socialBlock}>
          <Twitter/>
          <Twitch/>
          <TikTok/>
          <YouTube/>
          <Instagram/>
          <Facebook/>
          <Discord/>
        </div>
      </div>
    </header>
  );
};

export default Header;
