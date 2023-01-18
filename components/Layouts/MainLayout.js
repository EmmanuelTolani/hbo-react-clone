import Header from "../UI/Header/Header";
import SideNav from "../UI/SideNav/SideNav";
import { useState } from "react";
import { useStateContext } from "../HBOProvider.js";
import ls from "local-storage";

const MainLayout = (props) => {
  const globalState = useStateContext();
  let users = ls("users") != null ? ls("users") : []; // check for local storage users to see if it's not null
  // let activeUID = ls("activeUID");
  // console.log(users);
  // // if (activeUID in user.id) {
  // //   console.log("the users background", color);
  // // } else {
  // //   console.log("no background");
  // // }
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
    <div
      className={`${handleBackground()}`}
      style={{
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <SideNav />
      <section className="content-container">{props.children}</section>
    </div>
  );
};

export default MainLayout;
