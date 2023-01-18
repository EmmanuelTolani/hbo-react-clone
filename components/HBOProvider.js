import React, { useContext, useState } from "react";
import ls from "local-storage";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");
  const [theme, setTheme] = useState("purple");
  // const [userImg, setUserImg] = useState("");
  const defaultUserImg =
    "https://img.freepik.com/free-vector/cute-cartoon-creature-blue-color-with-horns-feel-dizzy-illustration_1284-64077.jpg?t=st=1663780565~exp=1663781165~hmac=b10ffc9705ef61ab5a107d8ba65ff790e14568fba51fad6a3d80e06877e1fa47";
  const createUserAction = (event) => {
    setUser(event.target.value);
    // console.log(user);
  };
  const setThemeAction = (event) => {
    setTheme(event.target.dataset.color);
  };
  // const selectUserImgAction = (event) => {
  //   setUserImg
  // }
  const [sideNavOpen, setSideNavOpenAction] = useState(false);
  const [accountModalOpen, setAccountModalOpenAction] = useState(false);
  const [searchOpen, setSearchOpenAction] = useState(false);
  const thumbTypes = ["large-v", "small-v", "large-h", "small-h"];
  const [watchList, setWatchList] = useState(ls.get("myList"));

  const addToList = (video) => {
    let myList;
    if (ls("myList") !== null) {
      myList = ls.get("myList");
      myList.push(video);
      ls.set("myList", myList);
      setWatchList(myList);
    } else {
      ls.set("myList", [video]);
    }
  };

  const removeFromList = (videoId) => {
    let myList = ls("myList");
    myList = myList.filter((item) => item.mediaId != videoId);
    ls.set("myList", myList);
    setWatchList(myList);
  };
  return (
    <StateContext.Provider
      value={{
        user,
        theme,
        setThemeAction,
        createUserAction,
        defaultUserImg,
        sideNavOpen,
        setSideNavOpenAction,
        accountModalOpen,
        setAccountModalOpenAction,
        searchOpen,
        setSearchOpenAction,
        thumbTypes,
        removeFromList,
        addToList,
        watchList,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
