import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");
  const defaultUserImg =
    "https://images.unsplash.com/photo-1476900966873-ab290e38e3f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=fe0976a79ece0ee8effca4cab4527ae2";
  const createUserAction = (event) => {
    setUser(event.target.value);
    console.log(user);
  };
  const [sideNavOpen, setSideNavOpenAction] = useState(false);
  const [accountModalOpen, setAccountModalOpenAction] = useState(false);
  const [searchOpen, setSearchOpenAction] = useState(false);
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
