import React, { useContext } from 'react'
import classes from './Cart.module.css';
import Modal from "../ui/Modal";
import Cartcontext from '../../store/Cart-context';
import Cartitem from './CartItem';
const Cart = (props) => {
    const Cartctx = useContext(Cartcontext);
    const totalamount = `₹ ${Cartctx.totalamount.toFixed(2)}`;
    const cartsize = Cartctx.items.length;
    var checkcartisempty = true;
    if (cartsize === 0) checkcartisempty = false;
    const Cartitemaddhandler = (item) => {
        Cartctx.additem(
            {
              ...item,
              qty:1,
            }
        )
    };
    const Cartitemremovehandler = (id) => { 
        Cartctx.removeitem(id);
    };
    const cartitems = (
        <ul className={classes['cart-items']}>
            {Cartctx.items.map(
                (item) => <Cartitem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    qty={item.qty}
                    onAdd={Cartitemaddhandler.bind(null, item)}
                    onRemove={Cartitemremovehandler.bind(null, item.id)} />
            )}
        </ul>
    );
    //console.log(Cartctx.items[0]);

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
                {checkcartisempty && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
