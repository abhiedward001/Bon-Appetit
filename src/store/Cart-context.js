import React from 'react';


const init_data = {
    items: [],
    totalamount: 0,
    additem: (item) => { },
    removeitem: (id) => { }
};
const Cartcontext = React.createContext(init_data);

export default Cartcontext;