import Account from "../Account/Account.js";
import SearchModal from "../SearchModal/SearchModal.js";
import { useStateContext } from "../../HBOProvider.js";
const Header = (props) => {
  const globalState = useStateContext();
  return (
    <header
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
          className="top-header__menu-btn"
          onClick={() => globalState.setSideNavOpenAction(true)}
        >
          <i className="fas fa-bars" />
        </div>
        <div
          className="top-header__search-btn"
          onClick={() => globalState.setSearchOpenAction(true)}
        >
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="top-header__logo"></div>
      <div
        className="top-header__account"
        onClick={() =>
          globalState.setAccountModalOpenAction(!globalState.accountModalOpen)
        }
      >
        <img
          className="top-header__user-img"
          src="https://images.unsplash.com/photo-1476900966873-ab290e38e3f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=fe0976a79ece0ee8effca4cab4527ae2"
          alt=""
        />
        <div className="top-header__user-name">Paul</div>
      </div>
      <Account />
      <SearchModal />
    </header>
  );
};

export default Header;
