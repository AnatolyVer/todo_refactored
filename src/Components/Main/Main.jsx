import React, {useContext} from "react";
import TaskList from "../TaskList/TaskList";
import {MyContext} from "../Context/MyContext";
import classes from "./Main.module.css";

function Main() {

  const {page, setPage, display, max} = useContext(MyContext);

  const plusP = () => {
    page === max ? setPage(1) : setPage(page + 1);
  }

  const minusP = () => {
    page === 1 ? setPage (max) : setPage(page - 1);
  }

  const leftButton = display ? <button  onClick={minusP} className = {`${classes.pageButtons} ${classes.leftButton}`}>{'<'}</button> : null
  const rightButton = display ? <button onClick={plusP} className= {`${classes.pageButtons} ${classes.rightButton}`}>{'>'}</button> : null
  return (
    <div className={classes.main}>
      {leftButton}
      <TaskList/>
      {rightButton}
    </div>
  );
}

export default Main;