import "./styles/cartitem.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { Decrease, Increase, removeItem } from "../features/cart/cartSlice";

function CartItem({ item }) {
  const id = item._id;
  const dispatch = useDispatch();

  return (
    <div className="cart_item">
      <img src={item.img} alt="" />
      <div className="cart_item_info">
        <h3 className="cart_item_title">{item.title}</h3>
        <p className="cart_item_desc">{item.desc}</p>
        <div className="cart_item_size">
          <span>Size: </span>
          <select name="size">
            <option value="xs">Xs</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="item_item_quantity">
          <div className="cart_Item_count">
            <RemoveIcon
              onClick={
                item.amount === 1
                  ? () => dispatch(removeItem({ id }))
                  : () => dispatch(Decrease({ id }))
              }
            />
          </div>
          <div className="cart_count">{item.amount}</div>
          <div className="cart_Item_count">
            <AddIcon onClick={() => dispatch(Increase({ id }))} />
          </div>
        </div>
        <div className="cart_Item_price">
          Rs. <b>{(item.price * item.amount).toFixed(2)}</b>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
