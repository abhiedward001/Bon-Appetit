import React,{useContext} from 'react'
import classes from './Cart.module.css';
import Modal from "../ui/Modal";
import Cartcontext from '../../store/Cart-context';
const Cart = (props) => {
    const Cartctx = useContext(Cartcontext);
    const totalamount=`₹ ${Cartctx.totalamount.toFixed(2)}`;
    const cartitems = <ul>
        {Cartctx.items.map(
            (item) => <li>{item.title}</li>
        )}
    </ul>

    return (
        <Modal onclose={props.onClosecart}>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalamount}</span>
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
