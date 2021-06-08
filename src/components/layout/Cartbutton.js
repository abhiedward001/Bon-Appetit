import React from 'react'
import Headercart_icon from "../cart/Headercart_icon";
import classes from "./Cartbutton.module.css";
 const Cartbutton = () => {
    return (
     <>
     <button className={classes.button}>
         <span className={classes.icon}><Headercart_icon></Headercart_icon></span>
         <span>Your Cart</span>
         <span className={classes.badge}>&nbsp;3</span>
     </button>
     </>
    )
}
export default Cartbutton;
