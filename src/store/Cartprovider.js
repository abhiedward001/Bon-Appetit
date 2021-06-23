import React, { useReducer } from 'react'
import Cartcontext from './Cart-context';


const defaultcartstate = {
    items: [],
    totalamount: 0
};

const cartreducer = (state, action) => {
    if (action.type === 'ADD') {

        const updatedtotalamount = state.totalamount + (action.item.price * action.item.qty);

        //here if we found same item then we return the index of that item.
        const existingcartitemindex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingitem = state.items[existingcartitemindex];


        let updateditems;
        if (existingitem) {
            const updateditem = {
                ...existingitem,
                qty: existingitem.qty + action.item.qty,
            };
            updateditems = [...state.items];
            updateditems[existingcartitemindex] = updateditem;
        }

        else {
            updateditems = state.items.concat(action.item);
        }

        return ({
            items: updateditems,
            totalamount: updatedtotalamount
        });

    }
    else if (action.type === 'DEL') {
        const existingcartitemindex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingitem = state.items[existingcartitemindex];
        const updatedtotalamount=state.totalamount-existingitem.price;
       let updateditems;
       if(existingitem.qty===1){
           updateditems=state.items.filter(item=>item.id!==action.id);
       }
       else{
           const updateditem={...existingitem,qty:existingitem.qty-1};
           updateditems=[...state.items];  //here we are copying all old state items values to new array
           updateditems[existingcartitemindex]=updateditem;
       }
     return{
         items:updateditems,
         totalamount:updatedtotalamount
     }
    }
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
            type: 'DEL',
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