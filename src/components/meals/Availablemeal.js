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
        name: 'Veg Pulav',
        description: `Kadai Paneer is a vibrant, tangy, spiced paneer dish that can brighten up your day any time. `,
        price: 200,
    },
    {
        id: 'm3',
        name: ' Veggie Aalu tikki Burger',
        description: 'The olive, walnuts, and lentils create the perfect texture for this flavor-packed burger',
        price: 180,
    },
    {
        id: 'm4',
        name: 'Veg Fried rice',
        description: 'Healthy...and green...',
        price: 120,
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
