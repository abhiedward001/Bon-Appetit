import React,{useContext} from 'react'
import classes from './Mealitem.module.css';
import Mealitemform from "./Mealitemform";
import Cartcontext from '../../../store/Cart-context';
const Mealitem = (props) => {
    const price=`₹ ${props.price.toFixed(2)}`;
    const ctx= useContext(Cartcontext);
    
    const Addtocart=(qty)=>{
       ctx.additem({
           id:props.id,
           name:props.title,
           qty:qty,
           price:props.price
       })
    }
    return (
        <li className={classes.meal}>
            <div>
            <h3>{props.title}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>

            <div>
            <Mealitemform onAddtocart={Addtocart}></Mealitemform>
            </div>
        </li>

    )
}

export default Mealitem
