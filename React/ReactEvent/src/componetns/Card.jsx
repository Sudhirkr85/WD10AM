import Styles from "./card.module.css";

function Card() {
  return (
    <>
      <div className={Styles.card} style={{ width: "18rem" }}>
        <div>
          <h5>Card title</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card