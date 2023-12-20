import React, { useEffect, useState, useSyncExternalStore } from "react";
import { FaShoppingBag } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../Redux/Slices/CartSlice";

const Navbar = () => {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [state]);
  console.log(state, "navbar");
  return (
    <nav className="nav-bar d-flex justify-content-between  bg-black  px-5 py-2 ">
      <Link to="/" className="text-decoration-none fs-3 text-white">
        Cell Phone Shop
      </Link>
      <Link to={"/mycart"} className="text-decoration-none text-white">
        <div className="nav-bag d-flex align-items-center gap-1 ">
          <FaShoppingBag style={{ width: "30px", height: "30px" }} />
          <span className="fs-4">{state.Cartreducer.cartTotalQuantity}</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
