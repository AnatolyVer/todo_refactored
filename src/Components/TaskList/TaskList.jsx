import React, {useContext}  from "react";
import Task from "../Task/Task";
import {MyContext} from "../Context/MyContext";
import classes from "./TaskList.module.css";

function TaskList() {

  const {page, plan} = useContext(MyContext);

  let i = 4*(page-1);

  const temp = plan.slice(i,i+4);

  if (plan.length === 0 )
    return ( <div className={classes.planList}> <p className={classes.empty}>There are no tasks</p></div>);

  return (    
    <div className={classes.planList}>
      <div className={classes.stats}>
        <p>Page: {page}</p>
        <p>Total: {plan.length}</p>
      </div>
      {temp.map((e) => <Task task = {e} key = {e.id}/>)}
    </div>
  );
}

export default TaskList;