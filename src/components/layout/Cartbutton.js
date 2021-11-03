import React, { useEffect, useState, useContext } from 'react'
import Headercart_icon from "../cart/Headercart_icon";
import classes from "./Cartbutton.module.css";
import Cartcontext from '../../store/Cart-context';

const Cartbutton = (props) => {
    const cartctx = useContext(Cartcontext);
    
    // will return total qty of items array
    const numberofcartitems = cartctx.items.reduce((CurNum, item) => {
        return CurNum + item.qty;
    }, 0);

    const { items } = cartctx; //destructuring object
    const [btnBump, setBtnBump] = useState(false); //state used for button animation

    const btnclass = `${classes.button} ${btnBump ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnBump(true);
        //used timer to make condition false as after re-rendering we need to add bump class again
       const timer= setTimeout(() => {
            setBtnBump(false);
            clearTimeout(timer)
        }, 300);
  
       
    }, [items]);

    return (
        <>
            <button className={btnclass} onClick={props.onclk}>
                <span className={classes.icon}><Headercart_icon></Headercart_icon></span>
                <span>Your Cart</span>
                <span className={classes.badge}>&nbsp;{numberofcartitems}</span>
            </button>
        </>
    )
}
export default Cartbutton;
