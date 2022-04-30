import React, { createContext, useState } from "react";

const CartContext = createContext({
  foodsInCart: [],
  totalAmount: 0 ,
  addFood: () => {},
  removeFood: () => {},
});

export const CartContextProvider = (props) => {
    
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const [orderedFoods, setOrderedFoods] = useState([]);
  const foodAdding = (id, count) => {
    let filteredFood = DUMMY_MEALS.filter((item) => item.id === id);

    setOrderedFoods((prevOrder) => {
        let newOrders = [];
      for (let i = 0; i < prevOrder.length; i++) {
        if (prevOrder[i].id === id) {
          newOrders.push({
            ...prevOrder[i],
            count: +prevOrder[i].count + +count,
          });
          filteredFood = null
        } else {
          newOrders.push(prevOrder[i]);
        }
      }
      if (filteredFood) {
        newOrders.push({ ...filteredFood[0], count: count });
      }
      return newOrders;
    });
  };

  const foodRemoving = () => {};
  return (
    <CartContext.Provider
      value={{
        foodsInCart: orderedFoods,
        addFood: foodAdding,
        removeFood: foodRemoving,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
