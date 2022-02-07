import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setShowCart } from "../../functions/Products/cardSlice";
import "./Header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const showCartHandler = () => {
    dispatch(setShowCart());
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src="/static/images/logo_2x.png" alt="Logo" />
        </Link>
      </div>

      <div className="page-links">
        <Link className="link" to="/">
          <h3>Home</h3>
        </Link>
        <Link className="link" to="/products">
          <h3>Products</h3>
        </Link>

        <div className="cart">
          <div className="cart-image" onClick={showCartHandler}>
            <img src="/static/images/cart.svg" alt="" />
            <p>{cart.cartTotalQuantity} Items</p>
          </div>
        </div>
      </div>

      <div className="login-links">
        <Link to="/signin">
          <h3>SignIn</h3>
        </Link>
        <Link to="/signup">
          <h3>Register</h3>
        </Link>
      </div>
    </div>
  );
}