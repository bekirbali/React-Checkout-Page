import { Header } from "../components/Header";
import { AddProduct } from "../components/add/AddProduct";
import { ProductList } from "../components/list/ProductList";
import { data } from "../utils/data";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
export const Home = () => {
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    setTotal(
      data.reduce((sum, item) => sum + item.price * item.dampingRate, 0)
    );
    setNewData(data);
  }, []);
  useEffect(() => {
    setTotal(
      newData.reduce((sum, item) => sum + item.price * item.dampingRate, 0)
    );
  }, [newData]);
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.main}>
        {show && (
          <div className={styles.add}>
            <AddProduct
              show={show}
              setShow={setShow}
              setNewData={setNewData}
              newData={newData}
            />
          </div>
        )}
        {total > 0 ? (
          <div className={styles.list}>
            <ProductList
              show={show}
              setShow={setShow}
              data={data}
              total={total}
              setTotal={setTotal}
              newData={newData}
              setNewData={setNewData}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
