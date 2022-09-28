import React, { useContext, useRef, useState } from "react";
import Context from "../../store/context";
import "./Header.modules.css";

export interface HeaderProps {
  title?: string;
  navbarItems?: Array<string>;
}

const Header: React.FC<HeaderProps> = ({
  title = "Equitek",
  navbarItems = ["Home", "About us", "Products", "Contacts"],
}) => {
  const { state, dispatch }: any = useContext(Context);
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const drawerRef: any = useRef();
  const refs: any = useRef([]);

  const calculateMargin = (index: number) => {
    let margin = 0;
    for (let i = 0; i < index; i++) {
      margin = refs.current[i].offsetWidth + margin;
    }
    return margin;
  };

  const [leftMargin, setLeftMargin] = useState<number>(calculateMargin(0));

  return (
    <header>
      <section className="logo-section">
        <img className="logo" src="assets/logo.svg" alt="" />
        <h3>{title}</h3>
      </section>

      <nav ref={drawerRef} className="navbar-mobile">
        <ul>
          {navbarItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>

        <img
          className="close-btn"
          src={`assets/close-white.svg`}
          alt=""
          onClick={() => {
            drawerRef.current.style.right = "-95%";
          }}
        />
      </nav>

      <nav className="navbar">
        <ul>
          {navbarItems.map((item, index) => {
            return (
              <li
                ref={(el) => (refs.current[index] = el)}
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setLeftMargin(calculateMargin(index));
                }}
              >
                <small>{item}</small>

                {index === activeIndex && <div className="nav-indicator"></div>}
              </li>
            );
          })}
          {/* <div
            style={{
              width: "30px",
              left: leftMargin,
            }}
            className="ind"
          ></div> */}
        </ul>

        <img
          className="toggle-theme-icon"
          src={`assets/toggle-theme-black.svg`}
          alt=""
          onClick={() => {
            dispatch({
              type: "toggle-theme",
            });
          }}
        />
      </nav>

      <img
        className="menu"
        src={`${
          state.themeDark ? "assets/menu-white.svg" : "assets/menu-black.svg"
        }`}
        alt=""
        onClick={() => {
          drawerRef.current.style.right = 0;
        }}
      />
    </header>
  );
};

export default Header;
