import "../components/styles/productdetails.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cart/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      await axios
        .get(`/products/${id}`)
        .then((res) => setProduct(res.data.product));
    };
    fetchProduct();
  }, [id]);

  const amount = 1;

  const addtoCart = () => {
    dispatch(addProduct({ ...product, size, color, amount }));
  };

  return (
    <>
      <Navbar />
      <div className="productdetails">
        <div className="prod_img">
          <img src={product.img} alt="" />
        </div>
        <div className="prod_info">
          <h2 className="prod_title">{product.title}</h2>
          <p className="prod_desc">{product.desc}</p>
          <div className="price">₹ {product.price}</div>
          <div className="prod_filter">
            <div className="prod_color">
              Color
              {product.color?.map((color) => (
                <span
                  key={`${color}`}
                  style={{ background: `${color}` }}
                  className="color"
                  onClick={() => setColor(color)}
                ></span>
              ))}
            </div>
            <div className="prod_size_filter">
              <span>Size</span>
              <select
                className="prod_size"
                name="prod_size"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((size) => (
                  <option key={`${size}`} className="size">
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Link to="/cart">
            <button className="add_cart" onClick={addtoCart}>
              Add TO CART
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
