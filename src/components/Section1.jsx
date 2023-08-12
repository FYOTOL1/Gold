import style from "../styles/css/Section1.module.css";
export default function Section1() {
  return (
    <>
      <div id="section1" className={style.section1}>
        <div className={style.filter}></div>
        <div className={style.rightSide}></div>
        <div className={style.leftSide}>
          <div className={style.description}>
            <h2>
              When we talk about the origins of gold, we will find that ramy
              gold shops have been with us for more than a quarter of a century
            </h2>
            <p>
              Rami Gold is the exclusive agent for gold, L'azurde for enamel,
              and L'azurde for diamonds and BTC in Kafr Saqr
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
