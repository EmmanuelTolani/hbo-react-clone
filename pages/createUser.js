import Head from "next/head";

export default function CreateUser() {
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Who is watching?</span>
        </div>
        <div className="create-user__form">
          <img
            className="create-user__user-img"
            src="https://images.unsplash.com/photo-1476900966873-ab290e38e3f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=fe0976a79ece0ee8effca4cab4527ae2"
          />
          <div className="create-user__input-group">
            <label>Name</label>
            <input type="text" className="create-user__inputText" />
            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(2,10,61)",
                  background:
                    "linear-gradient(135deg, rgba(2,10,61,1) 16%, rgba(215,10,120,1) 100%)",
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: "rgb(5,44,0)",
                  background:
                    "linear-gradient(135deg, rgba(5,44,0,1) 16%, rgba(0,255,5,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(45,1,1)",
                  background:
                    "linear-gradient(135deg, rgba(45,1,1,1) 16%, rgba(255,28,0,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(17,83,48)",
                  background:
                    "linear-gradient(135deg, rgba(17,83,48,1) 16%, rgba(10,215,185,1) 100%)",
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: "rgb(182,43,2)",
                  background:
                    "linear-gradient(135deg, rgba(182,43,2,1) 16%, rgba(213,215,10,1) 100%)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  );
}
