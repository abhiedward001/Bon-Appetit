import React, { useRef, useState } from 'react'
import classes from './Mealitemform.module.css'
import Input from "../../ui/Input";


const Mealitemform = (props) => {
    const qtyInputref = useRef();
    const [validamount, setValidamount] = useState(true);
    const formeventhandler = (event) => {
        event.preventDefault();
        const enteredqty = qtyInputref.current.value;
        const enteredqtyno = +enteredqty;
        if (enteredqty === 0 || enteredqtyno < 1 || enteredqtyno > 10) {
            setValidamount(false);
            return;
        }
        else   props.onAddtocart(enteredqtyno);
    };
  
    return (
        <form className={classes.form} onSubmit={formeventhandler} >
            <Input
                label="Qty"
                ref={qtyInputref}
                input={{
                    id: 'Qty + props.id ',
                    type: 'number',
                    min: '0',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }}>

            </Input>
            <button>+ ADD</button>
            {!validamount && <p>Please enter the valid quantity!(1-10)</p>}
        </form>

    )
};



export default Mealitemform
