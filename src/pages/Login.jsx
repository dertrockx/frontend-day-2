import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { FullscreenWrapper } from "components";

import {
  login as loginUser,
  logout as logoutUser,
} from "redux/actions/authActions";

function Login() {
  const dispatch = useDispatch();

  const loginPending = useSelector((state) => state.auth.loginPending);
  const loginError = useSelector((state) => state.auth.loginError);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <FullscreenWrapper>
      Login <Link to="/">Home</Link>
    </FullscreenWrapper>
  );
}

export default Login;
