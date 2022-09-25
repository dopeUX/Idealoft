import React, { useContext } from "react";
import Context from "../store/context";
import Footer from "./Footer/Footer.component";
import Header from "./Header/Header.component";
import HomePage from "./Homepage/Homepage.component";

const Theme: React.FC<any> = () => {
  const { state, dispatch }: any = useContext(Context);
  return (
    <div
      className={`${
        state.themeDark
          ? "dark-theme theme-component-dark"
          : "light-theme theme-component-light"
      } theme-component`}
    >
      <Header
        title="EquiTek"
        navbarItems={["Home", "About us", "Products", "Contacts"]}
      />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Theme;
