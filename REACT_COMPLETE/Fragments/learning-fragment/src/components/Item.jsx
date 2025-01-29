import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`${styles['prtk-item']} list-group-item`}>
      <span className={styles['prtk-span']}>{foodItem}</span>
    </li>
  );
};

export default Item;
