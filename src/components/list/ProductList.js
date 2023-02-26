import { useEffect } from "react";
import { Card } from "./Card";
import styles from "./ProductList.module.scss";
export const ProductList = ({
  show,
  setShow,
  newData,
  setNewData,
  total,
  setTotal,
  data,
}) => {
  useEffect(() => {
    setNewData(data);
  }, []);
  return (
    <>
      <div className={styles.main}>
        <div className={styles["card-container"]}>
          {total && newData
            ? newData.map((item) => {
                return (
                  <Card
                    key={item.id}
                    {...item}
                    setTotal={setTotal}
                    total={total}
                  />
                );
              })
            : data.map((item) => {
                return (
                  <Card
                    key={item.id}
                    {...item}
                    setTotal={setTotal}
                    total={total}
                  />
                );
              })}
        </div>

        <div className={styles["total-price"]}>
          Total Cart Price: {total.toFixed(2)}
        </div>

        <div className={styles.add}>
          {!show && (
            <button className="btn btn-warning" onClick={() => setShow(true)}>
              Add Item
            </button>
          )}
        </div>
      </div>
    </>
  );
};
