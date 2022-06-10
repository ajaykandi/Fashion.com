import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../axios";
import "../components/styles/cart.css";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { calculateTotals } from "../features/cart/cartSlice";
import StripeCheckout from "react-stripe-checkout";
const KEY = process.env.REACT_APP_STRIPEKEY;

function Cart() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart, dispatch]);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total,
        });
        console.log(res.data);
        nav("/success", {
          state: {
            stripeData: res.data,
            products: cart,
          },
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart, nav]);

  if (cart.cartItems?.length < 1) {
    return (
      <>
        <Navbar />
        <section className="cart">
          <header>
            <h2>your bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
          </header>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="cart_container">
        <div className="cart_items">
          {cart.cartItems?.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>
        <div className="cart_total">
          <div className="cart_order_details">
            <b>Order Details</b>
          </div>
          <div className="cart_bag_details">
            <span>Bag total</span>
            <span>₹{cart.total.toFixed(2)}</span>
          </div>
          <div className="cart_bag_details">
            <span>Bag discount</span>
            <span>-</span>
          </div>
          <div className="cart_bag_details">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="cart_bag_details">
            <span>
              <b>Total Amount</b>
            </span>
            <span>
              ₹<b> {cart.total.toFixed(2)}</b>
            </span>
          </div>
          <StripeCheckout
            name="Fashion.com"
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description={`Your total is ₹${cart.total}`}
            amount={cart.total}
            token={onToken}
            stripeKey={KEY}
          >
            <button className="">PROCEED TO SHOPPING</button>
          </StripeCheckout>
        </div>
      </div>
    </>
  );
}

export default Cart;
