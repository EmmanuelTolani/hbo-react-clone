import Head from "next/head";
import { useStateContext } from "../../HBOProvider.js";

const Login = () => {
  const globalState = useStateContext();

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who is watching?</span>
      </div>
      <div className="login-user__form">
        <div className="login-user__user-box">
          <img
            className="login-user__user-img"
            src="https://images.unsplash.com/photo-1476900966873-ab290e38e3f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=fe0976a79ece0ee8effca4cab4527ae2"
          />
          <div className="login-user__user-name">{globalState.test}</div>
        </div>
      </div>
      <div className="login-user__buttons">
        <button className="login-user__adult">Add Adult</button>
        <button className="login-user__kid">Add Kid</button>
      </div>
    </div>
  );
};

export default Login;
