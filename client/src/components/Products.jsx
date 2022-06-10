import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../axios";
import Product from "./Product";
import ProductCard from "./ProductCard";
import "./styles/products.css";
function Products({ filters, sort }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setItems] = useState([]);
  const location = useLocation();
  const category = location.search.split("=")[1];

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(category ? `/products?category=${category}` : `/products`)
        .then((res) => setItems(res.data.products))
        .catch((err) => console.log(err.message));
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      {category ? (
        <>
          <h1 className="products_container_category"> {category}</h1>
          <div className="products_container">
            {filteredProducts.map((item) => (
              <ProductCard item={item} key={item._id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="products_container_title">Popular Products</h1>
          <div className="products_container">
            {products.slice(0, 8).map((item) => (
              <Product item={item} key={item._id} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Products;
