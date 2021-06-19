import React, { useReducer } from 'react'
import Cartcontext from './Cart-context';


const defaultcartstate = {
    items: [],
    totalamount: 0
};

const cartreducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateditems = state.items.concat(action.item);
        const updatedtotalamount = state.totalamount + (action.item.price * action.item.qty);
        return{
              items:updateditems,
              totalamount:updatedtotalamount
            };
        
    }
    return defaultcartstate;
};

const Cartprovider = (props) => {

    const [cartstate, dispatchcartaction] = useReducer(cartreducer, defaultcartstate);

    const additemeventhandler = (item) => {
        dispatchcartaction({
            type: 'ADD',
            item: item
        });
    };

    const removeitemeventhandler = (id) => {
        dispatchcartaction({
            type: 'del',
            id: id
        });
    };

    const cartcontext = {
        items: cartstate.items,
        totalamount: cartstate.totalamount,
        additem: additemeventhandler,
        removeitem: removeitemeventhandler
    };
    return (
        <Cartcontext.Provider value={cartcontext}>
            {props.children}
        </Cartcontext.Provider>
    )
};

export default Cartprovider;