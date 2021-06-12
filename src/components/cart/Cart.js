import React from 'react'
import classes from './Cart.module.css';
import Modal from "../ui/Modal";
const Cart = (props) => {
    const cartitems = <ul>
        {[{ id: '1', name: 'Biryani', amount: '2', price: '360' }].map(
            (items) => <li>{items.name}</li>
        )}
    </ul>

    return (
        <Modal onclose={props.onClosecart}>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>100</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}
                 onClick={props.onClosecart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
