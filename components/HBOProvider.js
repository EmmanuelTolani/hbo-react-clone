import React, { useContext, useState } from "react";
import ls from "local-storage";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");
  // const [userImg, setUserImg] = useState("");
  const defaultUserImg =
    "https://images.unsplash.com/photo-1476900966873-ab290e38e3f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=fe0976a79ece0ee8effca4cab4527ae2";
  const createUserAction = (event) => {
    setUser(event.target.value);
    console.log(user);
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
