import React, { createContext } from "react";

const cartContext = createContext({
  foodsInCart: [],
  addFood: () => {},
  removeFood: () => {},
});

export const cartContextProvider = (props) => {

  const [orderedFoods, setOrderedFoods] = useState([]);

  const foodAdding = (list , id, count) => {
    let filteredFood = list.filter((item) => item.id === id);
    setOrderedFoods((prevOrder) => [
      ...prevOrder,
      { ...filteredFood[0], count },
    ]);
  };

  return (
    <cartContext.Provider value={{
        foodsInCart : orderedFoods,
        
        }}>
      {props.children}
    </cartContext.Provider>
  );
};
export default cartContext;
