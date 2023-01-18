import Head from "next/head";
import { useState } from "react";
import { useStateContext } from "../components/HBOProvider";
import ls from "local-storage";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import UserImg from "../components/UI/UserImg/UserImg";

export default function CreateUser() {
  const globalState = useStateContext();
  const [bGcolor, setbGColor] = useState("purple");
  const Router = useRouter();
  const saveUser = () => {
    let users = [], // initialize the array for all the future users
      user; // initialize user variable

    if (ls("users") < 1) {
      // if local storage users array is less than 1 item create the user array
      //user {
      // id: unique key with uuid ,
      // user: keyboard value of user name,
      //future list of movies user wants to watch later
      //}
      user = {
        id: v4(),
        user: globalState.user,
        myListID: [],
        // theme: globalState.theme,
      };
      users.push(user);
      ls("users", users);
      Router.push("/login");
      console.log("users:", users);
      // console.log("lsusers", ls("users"));
    } else {
      users = ls("users");
      user = {
        id: v4(),
        user: globalState.user,
        myListID: [],
        // theme: globalState.theme,
      };
      users.push(user);
      ls("users", users);
      console.log("users:", users);
      Router.push("/login"); // send the user to the login route
    }
  };
  const restart = () => {
    location.reload();
  };
  // const handleColorClick = (event) => {
  //   var color = event.target.dataset.color;
  //   setbGColor(color);
  //   console.log(color);
  // };
  const handleBackground = () => {
    if (globalState.theme == "purple") {
      return "purpleBg";
    } else if (globalState.theme == "green") {
      return "greenBg";
    } else if (globalState.theme == "red") {
      return "redBg";
    } else if (globalState.theme == "blue") {
      return "blueBg";
    } else if (globalState.theme == "orange") {
      return "orangeBg";
    } else {
      return "";
    }
  };
  return (
    <div className={`create-user ${handleBackground()}`}>
      <div className="create-user__top">
        <div className="create-user__logo" />
        <span className="create-user__title">Who is watching?</span>
      </div>
      <div className="create-user__container">
        <UserImg />
        <div className="create-user__form">
          <div className="create-user__input-group">
            <label>Name</label>
            <input
              value={globalState.user}
              onChange={globalState.createUserAction}
              type="text"
              placeholder="Enter your name"
              className="create-user__inputText"
            />
            <div className="create-user__colors">
              <div
                data-color="purple"
                className={
                  globalState.theme == "purple"
                    ? "create-user__color create-user__color--active"
                    : "create-user__color"
                }
                style={{
                  background: "rgb(2,10,61)",
                  background:
                    "linear-gradient(135deg, rgba(2,10,61,1) 16%, rgba(215,10,120,1) 100%)",
                }}
                onClick={globalState.setThemeAction}
              />
              <div
                data-color="green"
                className={
                  globalState.theme == "green"
                    ? "create-user__color create-user__color--active"
                    : "create-user__color"
                }
                style={{
                  background: "rgb(5,44,0)",
                  background:
                    "linear-gradient(135deg, rgba(5,44,0,1) 16%, rgba(0,255,5,1) 100%)",
                }}
                onClick={globalState.setThemeAction}
              />
              <div
                data-color="red"
                className={
                  globalState.theme == "red"
                    ? "create-user__color create-user__color--active"
                    : "create-user__color"
                }
                style={{
                  background: "rgb(45,1,1)",
                  background:
                    "linear-gradient(135deg, rgba(45,1,1,1) 16%, rgba(255,28,0,1) 100%)",
                }}
                onClick={globalState.setThemeAction}
              />
              <div
                data-color="blue"
                className={
                  globalState.theme == "blue"
                    ? "create-user__color create-user__color--active"
                    : "create-user__color"
                }
                style={{
                  background: "rgb(17,83,48)",
                  background:
                    "linear-gradient(135deg, rgba(17,83,48,1) 16%, rgba(10,215,185,1) 100%)",
                }}
                onClick={globalState.setThemeAction}
              />
              <div
                data-color="orange"
                className={
                  globalState.theme == "orange"
                    ? "create-user__color create-user__color--active"
                    : "create-user__color"
                }
                style={{
                  background: "rgb(182,43,2)",
                  background:
                    "linear-gradient(135deg, rgba(182,43,2,1) 16%, rgba(213,215,10,1) 100%)",
                }}
                onClick={globalState.setThemeAction}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="create-user__buttons">
        <button className="create-user__cancel" onClick={restart}>
          Cancel
        </button>
        <button className="create-user__save" onClick={saveUser}>
          Save
        </button>
      </div>
    </div>
  );
}
