import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../features/user/apiRequests";
import "../components/styles/login.css";
function Login() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { error } = useSelector((store) => store.user);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(dispatch, user);
  };
  return (
    <div className="login_container">
      <div className="login_wrapper">
        <h1>LOGIN</h1>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <input name="email" placeholder="email" />
          <input name="password" type="password" placeholder="password" />
          <button>LOGIN</button>
          {error && <span className="error">{error}</span>}
          <div className="navigate_link">DO NOT YOU REMEMBER THE PASSWORD?</div>
          <div className="navigate_link">CREATE A NEW ACCOUNT</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
