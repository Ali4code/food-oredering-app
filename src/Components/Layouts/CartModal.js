import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Card from "../UI/Card/Card";
import classes from "./CartModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const cartCntx = useContext(CartContext);
  const orderedFoodList = cartCntx.foodsInCart.map((item) => {
    return (
      <li className={classes.li} key={item.id}>
        <h1>{item.name}</h1>
        <div className={classes.flex}>
          <span>
            {item.price} <button>X{item.count}</button>
          </span>
          <div>
            <button className={classes.npbtn}>-</button>
            <button className={classes.npbtn}>+</button>
          </div>
        </div>
        <hr />
      </li>
    );
  });

  return (
    <Card className={classes.modal}>
      {orderedFoodList}
      <div className={classes[`total-div`]}>
      <h1>Total Amount</h1>
      <h1>33$</h1>
      </div>
      <Button onClick={props.onConfirm}>Close</Button>
      <Button>Order</Button>
    </Card>
  );
};

function CartModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("back-drop")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
}

export default CartModal;
