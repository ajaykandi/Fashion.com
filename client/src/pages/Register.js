import "../components/styles/register.css";
import axios from "../axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const nav = useNavigate();

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", {
        ...formData,
      });
      nav("/login");
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  return (
    <div className="register_container">
      <div className="register_wrapper">
        <h1>CREATE AN ACCOUNT</h1>
        <form onChange={handelChange} onSubmit={handleSubmit}>
          <input name="name" placeholder="name" />
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" />
          {error && <span className="error">{error}</span>}
          <span className="register_agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button>CREATE</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
