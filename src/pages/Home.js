import { Header } from "../components/Header";
import { AddProduct } from "../components/add/AddProduct";
import { ProductList } from "../components/list/ProductList";
import styles from "./Home.module.scss";
import { useState } from "react";
export const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.main}>
        {show && (
          <div className={styles.add}>
            <AddProduct show={show} setShow={setShow} />
          </div>
        )}
        <div className={styles.list}>
          <ProductList show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};
