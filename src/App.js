import React, { useState } from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from './components/cart/Cart';
import Cartprovider from './store/Cartprovider';




function App() {
  const [cartisshown,setCartisshown]=useState(false);

  const showcarthandler=()=>{
    setCartisshown(true);
  };
  const closecarthandler=()=>{
    setCartisshown(false);
  };
  return (
    <Cartprovider>
       {cartisshown && <Cart onClosecart={closecarthandler}/>}
      <Header onShowcart={showcarthandler}></Header>
    
      <main>
        <Meals></Meals>
      </main>

    </Cartprovider>
  );
}

export default App;
