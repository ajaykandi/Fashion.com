import { Link } from "react-router-dom";
import "./styles/categoryitem.css";
function CategoryItem({ item }) {
  return (
    <div className="CategoryItem">
      <Link to={`/products?categoty=${item.category}`}>
        <img src={item.img} alt="" />
        <div className="CategoryItem_info">
          <h1>{item.title}</h1>
          <button>SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;
