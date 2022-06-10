import React from "react";
import { Link } from "react-router-dom";
import "./styles/Productcard.css";

function ProductCard({ item }) {
  return (
    <>
      <Link to={`/product/${item._id}`}>
        <div className="productCard_container">
          <img src={item.img} alt="" />
          <div className="productCard_info">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <span>
              Rs. <b>{item.price}</b>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
