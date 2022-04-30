import React, { Fragment } from "react";
import Classes from "./SingleMeal.module.css";
import AddFood from "../Layouts/AddFood";
function Meal(props) {
  return (
    <Fragment>
      <li className={Classes.container}>
        <section className={Classes["single-meal"]}>
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <h4 className={Classes.price}>${props.price}</h4>
        </section>
        <AddFood id={props.id}/>
      </li>
      <hr />
    </Fragment>
  );
}

export default Meal;
