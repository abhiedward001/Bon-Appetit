import React from 'react'
import Cartcontext from './Cart-context';


const Cartprovider = (props) => {
    const additemeventhandler=(item)=>{};
    const removeitemeventhandler=(id)=>{};
    const cartcontext={
        items:[],
        totalamount:0,
        additem:additemeventhandler,
        removeitem:removeitemeventhandler
    };
    return (
      <Cartcontext.Provider value={cartcontext}>
          {props.children}
      </Cartcontext.Provider> 
    )
};

export default Cartprovider;