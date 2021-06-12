import React from 'react'
import classes from './Mealitemform.module.css'
import Input from "../../ui/Input";
const Mealitemform = () => {
    return (
        <form className={classes.form} >
           <Input label="Amount" input={{
               id:'amount + props.id ',
               type:'number',
               min:'0',
               max:'10',
               step:'1',
               defaultValue:'0'
           }}>

           </Input>
            <button>+ ADD</button>

        </form>

    )
}

export default Mealitemform
