import React, {useContext} from "react";
import {MyContext} from "../Context/MyContext";
import classes from "./Task.module.css";

function Task({task}) {

    const {plan, setPlan} = useContext(MyContext);

  const del = (task) => {
    setPlan(plan.filter(p => p.id !== task.id));
  }

  return (
    <div className={classes.element}>
        <p className={classes.task}>{task.text}</p>
        <button onClick={() => del(task)} className={classes.deleteButton}>Delete</button>
    </div>
  );
}

export default Task;