import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  getTotals,
  removeFromCart,
} from "../Redux/Slices/CartSlice";
import { toast } from "react-toastify";

const Table = () => {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [state]);
  return (
    <div className="container">
      <table className="table  mt-4">
        <thead>
          <tr>
            <td>PRODUCT</td>
            <td>PRICE</td>
            <td className="text-start">QUANTITY</td>
            <td>TOTAL</td>
          </tr>
        </thead>
        <tbody>
          {state.Cartreducer?.cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex gap-2 align-items-center">
                  <img
                    style={{ width: "85px", height: "85px" }}
                    src={item.image}
                    alt=""
                  />
                  <div>
                    <h5>{item.name}</h5>
                    <p>{item.desc}</p>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item)),
                          toast.success(`${item.name} Deleted Successfully `, {
                            autoClose: 1500,
                          });
                      }}
                      className="border-0 bg-transparent"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </td>
              <td className="text-success  ">${item.price}</td>
              <td>
                <div className="d-flex align-items-center border w-50 justify-content-center rounded">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item))}
                    className={`btn border-0 ${
                      item.cartQuantity <= 0 && "disabled"
                    }`}
                  >
                    -
                  </button>
                  <span>{item.cartQuantity}</span>
                  <button
                    className="btn"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>
              </td>

              <td className="text-success fw-bold ">
                ${item.price * item.cartQuantity}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <div>
          <button
            onClick={() => dispatch(clearCart())}
            className="btn btn-dark"
          >
            Clear Cart
          </button>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <h4>Subtotal</h4>
            <h4>${state.Cartreducer.cartTotalAmount}</h4>
          </div>
          <p>Taxes and shipping calculated at checkout</p>
          <button className="btn btn-primary w-100">Check Out</button>
          <p className="mt-2">Continue Shopping</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
