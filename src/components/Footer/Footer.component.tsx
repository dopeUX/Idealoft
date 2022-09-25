import React, { useContext, useEffect } from "react";
import "./Footer.modules.css";
import Context from "../../store/context";
const Footer: React.FC<any> = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet turpis sit amet lacinia feugiat. Cras a sapien a augue tempor sollicitudin sed ac nibh.";
  const { state, dispatch }: any = useContext(Context);
  useEffect(() => {
    console.log(state.themeDark);
  }, []);
  return (
    <div className="footer">
      <section className="footer-top-section">
        <section className="search-section">
          <input type="text" className="search-section" />
          <p>{desc}</p>
        </section>

        <div className="divider"></div>

        <section className="testimonial">
          <img src="assets/profile.png" alt="" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="know-more-btn">
            <h4>Know more</h4>
            <button>&gt;</button>
          </div>
        </section>
      </section>

      <div className="divider"></div>

      <section className="description-section">
        <h3>Lorem ipsum dolor sit amet</h3>
        <div className="descriptions">
          {Array(4)
            .fill(undefined)
            .map((x, i) => {
              return <span>Lorem ipsum dolor sit amet</span>;
            })}
          {/* <span>Lorem ipsum dolor sit amet</span>
          <span>Lorem ipsum dolor sit amet</span>
          <span>Lorem ipsum dolor sit amet</span> */}
        </div>
      </section>
    </div>
  );
};

export default Footer;
