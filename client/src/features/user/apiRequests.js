import axios from "../../axios";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", {
      ...user,
    });
    dispatch(loginSuccess(res.data));
  } catch (error) {
    const { msg } = error.response.data;
    dispatch(loginFailure(msg));
  }
};
