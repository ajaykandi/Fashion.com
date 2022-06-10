import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <Link to="/">
          <h1 className="footer_left_title">Fashion.com</h1>
        </Link>
        <p className="footer_desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          praesentium debitis tenetur excepturi unde, earum laboriosam
          voluptatesm ipsam numquam in Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </p>
        <div className="footer_social_container">
          <div
            style={{ backgroundColor: "#3B5999" }}
            className="footer_icon_container"
          >
            <Facebook className="icon" />
          </div>
          <div
            style={{ backgroundColor: "#E4405F" }}
            className="footer_icon_container"
          >
            <Instagram className="icon" />
          </div>
          <div
            style={{ backgroundColor: "#55ACEE" }}
            className="footer_icon_container"
          >
            <Twitter className="icon" />
          </div>
          <div
            style={{ backgroundColor: "#E60023" }}
            className="footer_icon_container"
          >
            <Pinterest className="icon" />
          </div>
        </div>
      </div>
      <div className="footer_center">
        <h3 className="footer_center_title">Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="footer_right">
        <h3 className="footer_center_title">Contact</h3>
        <div className="Footer_contact_icon">
          <Room /> <span>1-66 ,Peddapally ,Telangana </span>
        </div>
        <div className="Footer_contact_icon">
          <Phone style={{ marginRight: "10px" }} /> <span>+91 123456789</span>
        </div>
        <div className="Footer_contact_icon">
          <MailOutline style={{ marginRight: "10px" }} />
          <span>@Fashion.com</span>
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </div>
    </div>
  );
}

export default Footer;
