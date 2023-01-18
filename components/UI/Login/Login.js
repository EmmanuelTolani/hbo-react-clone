import Head from "next/head";
import { useEffect, useState } from "react";
import { useStateContext } from "../../HBOProvider.js";
import { useRouter } from "next/router";
import ls from "local-storage";
import { useMounted } from "../../Hooks/useMounted";

const Login = () => {
  const globalState = useStateContext();
  const Router = useRouter();
  const [loadingUsers, setLoadingUsers] = useState(false);
  let users = ls("users") != null ? ls("users") : []; // check for local storage users to see if it's not null
  let { hasMounted } = useMounted();

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false);
    }
    // console.log("load effect", users);
  });

  // console.log("declared users", users);

  const selectUser = (id) => {
    // console.log(id);
    ls("activeUID", id);
    Router.push("/");
  };

  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            onClick={() => selectUser(user.id)}
            className="login-user__user-box"
            key={user.id}
          >
            <img
              className="login-user__user-img"
              src="https://img.freepik.com/free-vector/cute-cartoon-creature-blue-color-with-horns-feel-dizzy-illustration_1284-64077.jpg?t=st=1663780565~exp=1663781165~hmac=b10ffc9705ef61ab5a107d8ba65ff790e14568fba51fad6a3d80e06877e1fa47"
            />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        );
      });
    }
  };
  const createUser = () => {
    Router.push("/create");
  };

  return (
    <div className={`login-user`}>
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who is watching?</span>
      </div>
      <div className="login-user__form">{hasMounted ? showUsers() : ""}</div>
      <div className="login-user__buttons">
        <button className="login-user__adult" onClick={createUser}>
          Create New User
        </button>
      </div>
    </div>
  );
};

export default Login;
