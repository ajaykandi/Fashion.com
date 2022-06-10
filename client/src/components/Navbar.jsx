import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../features/user/userSlice";
import "./styles/Navbar.css";

function Navbar() {
  const { quantity } = useSelector((store) => store.cart);
  const user = useSelector((store) => store.user?.currentUser);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="navbar_Logo_invisible">
        <Link to="/">
          <h1>Fashion.com</h1>
        </Link>
      </div>

      <div className="navbar_left">
        <div className="navbar_search">
          <input type="text" />
          <SearchIcon />
        </div>
      </div>
      <div className="navbar_center">
        <Link to="/">
          <h1>Fashion.com</h1>
        </Link>
      </div>
      <div className="navbar_right">
        {/* if user logged in show name instead of Register */}
        {user ? (
          <Link to="#">
            <div className="nav_username">{user.name}</div>
          </Link>
        ) : (
          <Link to="/register">
            <div>Register</div>
          </Link>
        )}
        {/* if user logged in toggle to logout viceversa */}
        {user ? (
          <Link to="/">
            <div onClick={() => dispatch(logOut())}>Logout</div>
          </Link>
        ) : (
          <Link to="/login">
            <div>Login</div>
          </Link>
        )}

        <div className="navbar_cart">
          <Link to="/cart">
            <Badge color="primary" badgeContent={quantity}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
