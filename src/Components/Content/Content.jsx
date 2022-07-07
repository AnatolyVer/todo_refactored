import React, {useEffect, useState} from "react";
import Menu from "../Menu/Menu";
import Main from "../Main/Main";
import {MyContext} from "../Context/MyContext";
import classes from "./Content.module.css";

function Content() {

const [plan, setPlan] = useState([]);
const [size, setSize] = useState(0);
const [display, setDisplay] = useState(false);
const [page, setPage] = useState(1);
const [max, setMax] = useState(1);

useEffect(() => {
    if (plan.length === 0) setMax(1);
    else setMax(Math.ceil(plan.length / 4));

}, [plan])

useEffect(() => {
    if (max > 1 ) setDisplay(true);
    else setDisplay(false);
    if (page > max) setPage(max);
    if (page < max && size < plan.length) setPage(max);
}, [max])

return (
    <MyContext.Provider value={{plan, setPlan, size, setSize, display, setDisplay, page, setPage, max, setMax}}>
    <div className={classes.body}>
      <Menu/>
      <Main/>
    </div>
    </MyContext.Provider>
  );
}

export default Content;