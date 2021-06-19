import React from 'react';
import Card from "../ui/Card";
import classes from "./Availablemeal.module.css";
import Mealitem from "./Mealitem/Mealitem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chicken Biryani',
        description: 'Tender Chicken pieces are dum pukht with aromatic rice & exuberant bhuna spices',
        price: 325,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];



const Availablemeal = () => {

    const data = DUMMY_MEALS.map((meal)=> 
    <li>
        <Mealitem key={meal.id} id={meal.id}title={meal.name} description={meal.description} price={meal.price}/>
    </li>
    );

    return (
        <section className={classes.meals}>
            <Card>
            <ul>
                {data}
            </ul>
            </Card>
            
        </section>
    )
}

export default Availablemeal;
