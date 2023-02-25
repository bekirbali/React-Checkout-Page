import styles from "./Card.module.scss";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const Card = ({
  name,
  image,
  price,
  amount,
  dampingRate,
  total,
  setTotal,
}) => {
  const [count, setCount] = useState(1);

  const decreaseHandler = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotal(total - price * dampingRate);
    } else if (window.confirm(`${name} will delete`)) {
      setCount("");
      setTotal(total - price * dampingRate);
      return;
    }
  };

  const increaseHandler = () => {
    setCount(count + 1);
    setTotal(total + price * dampingRate);
  };

  return (
    <div className={styles["card-container"]}>
      {count && (
        <div className={styles.show}>
          <div className={styles.image}>
            <img src={image} alt="product" />
          </div>
          <div className={styles.details}>
            <div className={styles.name}>
              <h2>{name}</h2>
            </div>
            <div className={styles.price}>
              <strong>${(price * dampingRate).toFixed(2)}</strong>
              <span>${price}</span>
            </div>
            <div className={styles.count}>
              <button className={`${styles.minus} ${styles.btn}`}>
                <FaMinus onClick={decreaseHandler} />
              </button>
              <span>{count}</span>
              <button className={`${styles.plus} ${styles.btn}`}>
                <FaPlus onClick={increaseHandler} />
              </button>
            </div>
            <div className={styles["product-total"]}>
              <p>
                product total: ${(count * (price * dampingRate)).toFixed(2)}
              </p>
            </div>
          </div>
          <div className={styles["card-total"]}></div>
        </div>
      )}
    </div>
  );
};
