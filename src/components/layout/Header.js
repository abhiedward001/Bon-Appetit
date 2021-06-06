import React from 'react'
import foodimg from "../../images/f1.jpg";
import classes from "./Header.module.css";
 const Header = () => {
    return (
        <>
        <header className={classes.header}>
         <h1>Meals</h1>
         <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
         <img src={foodimg} alt="some problem in image.We will get back soon"/>
        </div>
        </>
    )
}
export default Header;