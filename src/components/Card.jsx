import React from "react";

import { useSelector } from "react-redux";
import Table from "./Table";
import { Link } from "react-router-dom";

const Card = () => {
  const state = useSelector((store) => store);

  return (
    <div>
      <h2 className="text-center mt-4">Shopping Cart</h2>
      {state.Cartreducer.cartItems.length === 0 ? (
        <div className="text-center mt-5">
          <h3>Your cart is empty now</h3>
          <Link to="/" className="text-decoration-none text-black fs-3">
            <button className="btn btn-warning">Start Shopping</button>
          </Link>
        </div>
      ) : (
        <Table />
      )}
    </div>
  );
};

export default Card;
