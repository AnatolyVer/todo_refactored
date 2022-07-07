import React, {useState, useContext} from "react";
import {MyContext} from "../Context/MyContext";
import classes from "./Menu.module.css";

function Menu() {

    const [text, setText] = useState('');

    const {plan, setPlan, size, setSize} = useContext(MyContext);

    const add = (e) => {
        e.preventDefault()
        if (text !== '') {
            setPlan([...plan, {text: text, id: Date.now()}])
            setText('');
            if (size < plan.length) setSize(size + 1);
            if (size > plan.length) setSize(size - 1);
        }
    }

  return (
    <div className={classes.menu}>
      <form onSubmit={add} className={classes.wrapper}>
      <input value = {text} onChange = {e => setText(e.target.value)} placeholder="Type your plans"></input>
      <button className={classes.addButton}>Add</button>
      </form>
    </div>
  );
}

export default Menu;
