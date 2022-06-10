import "./styles/product.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

function Product({ item }) {
  return (
    <div className="product_container">
      <img src={item.img} alt="" />
      <div className="product_info">
        <Link to={`/cart`}>
          <div className="product_icon">
            <ShoppingCartOutlinedIcon />
          </div>
        </Link>
        <Link to={`/product/${item._id}`}>
          <div className="product_icon">
            <SearchOutlinedIcon />
          </div>
        </Link>
        <div className="product_icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Product;
