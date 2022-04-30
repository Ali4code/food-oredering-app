import React, { useContext, useState } from "react";
import CartImage from "../../images/cartlogo.jpg";
import CartContext from "../../store/cart-context";
import Classes from "./CartIcon.module.css";
import CartModal from "./CartModal";
const CartIcon = (props) => {
  const [viewModal, setViewModal] = useState(false);

  const modalShow = () => {
    setViewModal(true);
  };
  const onConfirm = () => {
    setViewModal(false)
  };
  const cartCntx = useContext(CartContext)
  return (
    <React.Fragment>
      {viewModal && <CartModal onConfirm={onConfirm} />}
      <div onClick={modalShow} className={Classes.cart}>
        <img
          src={CartImage}
          className={Classes.cartitem}
          width="30px"
          alt="Cart Icon"
        />
        <p className={Classes.cartitem}>Your Cart</p>
        <p className={Classes.cartnumber}>{cartCntx.totalAmount}</p>
      </div>
    </React.Fragment>
  );
};

export default CartIcon;
