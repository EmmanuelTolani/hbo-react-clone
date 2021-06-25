import { useStateContext } from "../../HBOProvider.js";
import { useEffect } from "react";
const Account = (props) => {
  const globalState = useStateContext();
  // const loopComp = (comp, digit) => {
  //   let thumbnails = [];
  //   for (let index = 0; index < digit; index++) {
  //     thumbnails.push(comp);
  //   }
  //   return thumbnails;
  // };
  useEffect(() => {
    if (globalState.accountModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [globalState.accountModalOpen]);
  return (
    <div
      className={`account ${
        globalState.accountModalOpen ? "account--active" : ""
      }`}
    >
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list"></div>
      </div>
      <div className="account__menu">
        <ul className="account__main">
          <li>
            <a href="/" className="active">
              My List
            </a>
          </li>
        </ul>
        <div className="side-nav__divide" />
        <ul className="account__main">
          <li>
            <a href="/">Account</a>
          </li>
          <li>
            <a href="/">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
