import Header from "../UI/Header/Header";
import SideNav from "../UI/SideNav/SideNav";
import { useStateContext } from "../HBOProvider.js";

const MainLayout = (props) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(0,0,0,1) 55%, rgba(48,25,52, 1) 100%)",
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
