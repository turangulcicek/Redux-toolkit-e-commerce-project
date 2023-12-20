import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { addToCart } from "../Redux/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data));
  }, []);

  const dispatch = useDispatch();
  const state = useSelector((store) => store);

  return (
    <div className="home">
      <div className="d-flex row-cols-lg-6 row-cols-1 gap-5 flex-wrap p-5">
        {!products ? (
          <Loading />
        ) : (
          products?.map((item) => (
            <div
              key={item.id}
              className="d-flex flex-column align-items-center text-center justify-content-between shadow-lg  px-5 py-4 rounded"
            >
              <img
                style={{ width: "150px", height: "200px" }}
                key={item.id}
                src={item.image}
              />
              <h4>{item.brand}</h4>
              <h5>{item.name}</h5>
              <h5 className="">{item.desc}</h5>
              <h5 className="text-success">${item.price}</h5>
              <button
                onClick={() => {
                  dispatch(addToCart(item)),
                    toast.success(`${item.name} added to cart `, {
                      autoClose: 1500,
                    });
                }}
                className="btn btn-primary "
              >
                Add to Basket
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
