import { useEffect, useState } from "react";
import { data } from "../../utils/data";
import { Card } from "./Card";
import styles from "./ProductList.module.scss";
export const ProductList = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      data.reduce((sum, item) => sum + item.price * item.dampingRate, 0)
    );
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles["card-container"]}>
        {data.map((item) => {
          return (
            <Card key={item.id} {...item} setTotal={setTotal} total={total} />
          );
        })}
      </div>
      <div className={styles["total-price"]}>
        Total Cart Price: {total.toFixed(2)}
      </div>
    </div>
  );
};
