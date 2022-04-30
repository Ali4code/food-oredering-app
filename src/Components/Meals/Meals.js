import React from 'react'
import Meal from './Meal';
import Classes from './Meals.module.css'
function Meals() {

    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
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
      const mealsRendered = DUMMY_MEALS.map(item => {
        return  <Meal key={item.id} {...item}/>
      })
  return (
    <ul className={Classes.meals}>
        {mealsRendered}
    </ul>
  )
}

export default Meals