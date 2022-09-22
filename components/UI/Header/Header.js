import Account from "../Account/Account.js";
import SearchModal from "../SearchModal/SearchModal.js";
import { useStateContext } from "../../HBOProvider.js";
import Link from "next/link";
import ls from "local-storage";
import { useEffect, useState } from "react";
{
  //The UI section for the header
}
const Header = (props) => {
  const globalState = useStateContext();
  // const [user, setUserName] = useState("");
  // console.log(user);
  // setUserName(globalState.user);
  // console.log(user);
  return (
    <header
      //   HBO provider takes the hooks that control whether the accountModal , sideNav , and a search bar is open
      //   if they are true, return: then add the class top-header--menu-open
      //     else return: empty string
      className={`top-header ${
        globalState.accountModalOpen ||
        globalState.sideNavOpen ||
        globalState.searchOpen
          ? "top-header--menu-open"
          : ""
      }`}
    >
      <div className="top-header__left-side">
        <div
          // side nav button
          className="top-header__menu-btn"
          onClick={() => globalState.setSideNavOpenAction(true)}
        >
          <i className="fas fa-bars" />
        </div>
        <div
          // search button
          className="top-header__search-btn"
          onClick={() => globalState.setSearchOpenAction(true)}
        >
          <i className="fas fa-search" />
        </div>
      </div>
      <Link href="/">
        {/* hbo logo  */}
        <a>
          <div className="top-header__logo"></div>
        </a>
      </Link>
      <div
        // account button
        className="top-header__account"
        onClick={() =>
          globalState.setAccountModalOpenAction(!globalState.accountModalOpen)
        }
      >
        <img
          className="top-header__user-img"
          src="https://img.freepik.com/free-vector/cute-cartoon-creature-blue-color-with-horns-feel-dizzy-illustration_1284-64077.jpg?t=st=1663780565~exp=1663781165~hmac=b10ffc9705ef61ab5a107d8ba65ff790e14568fba51fad6a3d80e06877e1fa47"
          alt=""
        />
        <div className="top-header__user-name"></div>
      </div>
      <Account />
      <SearchModal />
    </header>
  );
};

export default Header;
