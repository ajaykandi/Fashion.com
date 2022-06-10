import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

import "../components/styles/ProductList.css";
function ProductList() {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      <div className="ProductList_filter_container">
        <div className="ProductList_filter">
          <div className="filter_size">
            <select name="size" id="size" onChange={handleChange}>
              <option value="choose" defaultValue>
                Choose size
              </option>
              <option value="xs">xs</option>
              <option value="s">s</option>
              <option value="m">m</option>
              <option value="l">l</option>
              <option value="xl">xl</option>
            </select>
          </div>
          <div className="filter_color">
            <select name="color" id="color" onChange={handleChange}>
              <option value="choose" defaultValue>
                Choose Color
              </option>
              <option value="blue">blue</option>
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="red">red</option>
              <option value="yellow">yellow</option>
              <option value="maroon">maroon</option>
              <option value="gray">gray</option>
              <option value="beige">beige</option>
            </select>
          </div>
        </div>

        <div className="productList_sort">
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products filters={filters} sort={sort} />
      <Footer />
    </div>
  );
}

export default ProductList;
