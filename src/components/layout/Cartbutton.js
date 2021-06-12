import React,{useContext} from 'react'
import Headercart_icon from "../cart/Headercart_icon";
import classes from "./Cartbutton.module.css";
import Cartcontext from '../../store/Cart-context';

 const Cartbutton = (props) => {
     const cartctx = useContext(Cartcontext);
     const numberofcartitems= cartctx.items.reduce((CurNum,item)=>{
         return CurNum+item.amount;
     },0)
    return (
     <>
     <button className={classes.button} onClick={props.onclk}>
         <span className={classes.icon}><Headercart_icon></Headercart_icon></span>
         <span>Your Cart</span>
         <span className={classes.badge}>&nbsp;{numberofcartitems}</span>
     </button>
     </>
    )
}
export default Cartbutton;
