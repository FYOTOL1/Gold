import React from "react";
import style from "../../styles/css/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div id="footer" className={style.footer}>
        <div className={style.footerCont}>
          <div className={style.leftSide}>
            <div>
              <p>
                <h3>email:</h3> ramygold085@gmail.com
              </p>
            </div>
            <div>
              <p>
                <h3>phone number:</h3> 01002007852
              </p>
            </div>
          </div>
          <div className={style.center}>
            <div>
              <p>
                <h3>Address:</h3> Kafr Saqr, Hospital Street, Salah Badawi
                Towers.
              </p>
            </div>
            <div>
              <p>
                <h3>Tax registration number:</h3> 974 - 498 - 655
              </p>
            </div>
          </div>
          <div className={style.rightSide}>
            <div>
              <p>
                <a target="blank" href="https://www.facebook.com/ramygold2020">
                  FaceBook
                </a>
              </p>
            </div>
            <div>
              <p>
                <a
                  target="blank"
                  href="https://www.tiktok.com/@ramygold2022?fbclid=IwAR3FoJZrrN2w2LpZOhHLOf8rh1mqavFpKD9uHBFqhEfABoMIBggVCF3oG3E"
                >
                  Tik Tok
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
