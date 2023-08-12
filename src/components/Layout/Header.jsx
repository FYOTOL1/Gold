import React from "react";
import style from "../../styles/css/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={style.header}>
        <div className={style.headerCont}>
          <div className={style.logo}>
            <h2>Ramy Gold</h2>
          </div>
          <div className={style.list}>
            <ul>
              <li>
                <a href="#section2">About Us</a>
              </li>
              <li>
                <a href="#footer">Contact Us</a>
              </li>
              <li>
                <a href="https://goo.gl/maps/51ktA9kozyDcAPAV6">Our Location</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
