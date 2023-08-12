import React from "react";
import style from "../styles/css/Section2.module.css";

export default function Section2() {
  return (
    <>
      <div id="section2" className={style.section2}>
        <div className={style.sectionCont}>
          <div className={style.leftSide}>
            <div className={style.border}></div>
            <div className={style.img1}></div>
          </div>
          <div className={style.rightSide}>
            <h2>Ramy gold jewelry, and watches</h2>
            <p>
              More than a quarter of a century of solid experience in jewellery,
              watches and gold
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
