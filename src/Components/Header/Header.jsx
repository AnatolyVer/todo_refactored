import React from "react";
import classes from './Header.module.css'

function Header() {
  return (
   <header className={classes.header}>
    <p className={classes.appName}>ToDo List</p>
    <p className={classes.author}>by AnatolyVer</p>
   </header>
  );
}

export default Header;