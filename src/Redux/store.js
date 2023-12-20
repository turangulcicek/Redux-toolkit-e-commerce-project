import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./Slices/CartSlice";

export default configureStore({
  reducer: {
    Cartreducer,
  },
});
