import React from 'react'
import classes from './Mealitem.module.css';
import Mealitemform from "./Mealitemform";
const Mealitem = (props) => {
    const price=`₹ ${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
            <h3>{props.title}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>

            <div>
            <Mealitemform></Mealitemform>
            </div>
        </li>

    )
}

export default Mealitem
