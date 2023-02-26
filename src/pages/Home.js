import { Header } from "../components/Header";
import { AddProduct } from "../components/add/AddProduct";
import { ProductList } from "../components/list/ProductList";
import styles from "./Home.module.scss";
export const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.main}>
        <div className={styles.add}>
          <AddProduct />
        </div>
        <div className={styles.list}>
          <ProductList />
        </div>
      </div>
    </div>
  );
};
