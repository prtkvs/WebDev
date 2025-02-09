import styles from "./Item.module.css";

const Item = ({ foodItem, handledBuyButton }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li className={`${styles["prtk-item"]} list-group-item`}>
      <span className={styles["prtk-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handledBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
